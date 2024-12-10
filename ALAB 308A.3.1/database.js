function central(id) {
    return new Promise((res, rej) => {
    setTimeout( () => {
        if (typeof id !== 'number' || isNaN(id)) {
            rej(new Error(`id should be number, got: ${id}`))
        } else if (id < 1 || id > 10) {
            rej(new Error(`id ${id} out of range`))
        } else {
            let dbname = "db" + ((id-1) % 3 + 1) 
            res(dbname)
        }
    }, 100)
  })
}

function db1(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let d = {
        uname: `User_${id}`,
        web: `user${id}.com`,
        comp: { nm: `Company_${id}`, cPhrase: "Making diff", b: "strat-value" }
      }
      res(d)
    },100)
  })
}

function db2(id) {
  return new Promise((res,rej) => {
    setTimeout( () => {
      let d = {
        uname: `User_${id}_db2`,
        web: `user${id}.net`,
        comp: {nm: `Company_${id}_db2`, cPhrase: "Impact create", b: "qual-sol"}
      }
      res(d)
    }, 100)
  })
}

function db3(id) {
  return new Promise((res, rej) => {
    setTimeout( () => {
      let d = {
        uname: `User_${id}_db3`,
        web: `user${id}.org`,
        comp: {nm: `Company_${id}_db3`, cPhrase: "Inno move", b: "fut-ideas"}
      }
      res(d)
    }, 100)
  })
}

function vault(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let d = {
        nm: `User name ${id}`,
        mail: `user${id}@mail.com`,
        addr: {
          st: `Street ${id}`, 
          suite: `Suite ${id}B`, 
          city: `City ${id}`, 
          zip: `ZIP${id}00`,
          geo: { lat: `00.0${id}`, lng: `11.1${id}` }
        },
        phone: `123-456-78${id}`
      }
      res(d)
    }, 100)
  })
}

module.exports = {central, db1, db2, db3, vault }