const { central, db1, db2, db3, vault } = require('./database')

async function getData(id) {
    let dbname; let basic; let pers;
    try {
        dbname = await central(id)
        if (dbname === 'db1') {
          basic = await db1(id)
        } else if (dbname === 'db2') { 
            basic = await db2(id)
        } else if (dbname === 'db3') { 
            basic = await db3(id) 
        } else {
          throw new Error("db not found") }
      
        try {
          pers = await vault(id)
          if (!pers.nm || !pers.mail) throw new Error("wrong vault data")
        } catch (vaultError) {
          console.error(`vault error: ${vaultError.message}`)
          return { err: `no personal data for id ${id}` }
        }
        
    } catch (err) {
        console.error(`central/db error: ${err.message}`)
        return { err: `no data from db for id ${id}` }
    }
    let uname = basic.uname, web = basic.web, compnm = basic.comp.nm
    let compcPhrase = basic.comp.cPhrase, compb = basic.comp.b
    let nm = pers.nm, mail = pers.mail, addrst = pers.addr.st
    let addrsuite = pers.addr.suite, addrcity = pers.addr.city
    let addrzip = pers.addr.zip, lat = pers.addr.geo.lat
    let lng = pers.addr.geo.lng, phone = pers.phone

    const res = {
        id: id,
        name: nm,
        email: mail,
        addr: {
            st: addrst,
            suite: addrsuite,
            city: addrcity,
            zip: addrzip,
            geo: {
                lat: lat,
                lng: lng
            }
        },
        phone: phone,
        uname: uname,
        web: web,
        comp: {
            nm: compnm,
            cPhrase: compcPhrase,
            b: compb
        }
    }
    console.log("user data:", res)
    return res
}

async function testData() {
    const ids = [1, 3, 7, 11, 'abc', 0]
    for (let i = 0; i < ids.length; i++) {
        let id = ids[i]
        console.log(`\nfetching data for id: ${id}`)
        try {
            const d = await getData(id)
            if (d.err) console.error("fetch err:", d.err)
            else console.log("success data:", d)
        } catch (e) {
            console.error(`test error: ${e.message}`)
        }
    }
}

testData()