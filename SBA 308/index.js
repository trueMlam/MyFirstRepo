function getlearnerdata(courseinfo, assignmentgroups, learnersubmissions) {
  if (courseinfo.id !== assignmentgroups.course_id) {
console.log("error: group doesn't belong to course!")
return [] }

  let results = []

  let learnerindex = 0
  while (learnerindex < learnersubmissions.length) {
let subm = learnersubmissions[learnerindex]
      let learner = {
id: subm.learner_id,
          avg: 0
      }

let totalpossible = 0
let totalscore = 0

      let assignindex = 0;
      while(assignindex < assignmentgroups.assignments.length) {
          let assign = assignmentgroups.assignments[assignindex];

          let foundsubm = null
          for (let i = 0; i < learnersubmissions.length; i++){
if (learnersubmissions[i].assignment_id === assign.id && learnersubmissions[i].learner_id === learner.id) {
                  foundsubm = learnersubmissions[i]
                  break
              }
          }

          let currentdate = new Date()
          let duedate = new Date(assign.due_at)

          if(currentdate < duedate) {
assignindex++
continue;
}

          if(foundsubm) {
              let pointspossible = assign.points_possible
              let score = foundsubm.submission.score

              let submitteddate = new Date(foundsubm.submission.submitted_at)
              if (submitteddate > duedate){
score = score - pointspossible * 0.1;
              }

              let perc = (score / pointspossible) * 100

              learner[assign.id] = perc

              totalpossible += pointspossible
              totalscore += score
          }

assignindex++
      }

      if (totalpossible > 0) learner.avg = (totalscore / totalpossible) * 100

results.push(learner)
      learnerindex++
  }

  return results
}

let courseinfo = {
  id: 1,
  name: 'javascript_101'
}

let assignmentgroups = {
  id: 1,
  course_id: 1,
group_weight: 40,
  assignments: [
      {
          id: 201,
          name: 'js_basics',
          due_at: "2012-01-05",
          points_possible: 30
      },
      {
          id: 202,
          name: "js_functions",
          due_at: '2012-01-10',
          points_possible: 100
      },
      {
          id: 203,
          name: 'js_objects',
          due_at: "2012-01-15",
          points_possible: 250
      },
      {
          id: 204,
          name: 'js_loops',
          due_at: '2012-01-20',
          points_possible: 500
      }
  ]
}

let learnersubmissions = [
  {
      learner_id: 1,
      assignment_id: 201,
      submission: {
          submitted_at: '2012-01-04',
          score: 28
      }
  },
  {
      learner_id: 1,
      assignment_id: 202,
      submission: {
          submitted_at: '2012-01-09',
          score: 85
      }
  },
  {
      learner_id: 1,
      assignment_id: 203,
      submission: {
          submitted_at: '2012-01-13',
          score: 230
      }
  },
  {
      learner_id: 1,
      assignment_id: 204,
      submission: {
          submitted_at: '2012-01-21',
          score: 450
      }
  },
  {
      learner_id: 2,
      assignment_id: 201,
      submission: {
          submitted_at: '2012-01-05',
          score: 25
      }
  },
  {
      learner_id: 2,
      assignment_id: 202,
      submission: {
          submitted_at: "2012-01-10",
          score: 90
      }
  },
  {
      learner_id: 2,
      assignment_id: 203,
      submission: {
          submitted_at: '2012-01-16',
          score: 240
      }
  },
  {
      learner_id: 2,
      assignment_id: 204,
      submission: {
          submitted_at: '2012-01-19',
          score: 470
      }
  },
  {
      learner_id: 3,
      assignment_id: 201,
      submission: {
          submitted_at: '2012-01-04',
          score: 30
      }
  },
  {
      learner_id: 3,
      assignment_id: 202,
      submission: {
          submitted_at: "2012-01-08",
          score: 95
      }
  },
  {
      learner_id: 3,
      assignment_id: 203,
      submission: {
          submitted_at: "2012-01-12",
          score: 245
      }
  },
  {
      learner_id: 3,
      assignment_id: 204,
      submission: {
          submitted_at: '2012-01-20',
          score: 500
      }
  },
  {
      learner_id: 4,
      assignment_id: 201,
      submission: {
          submitted_at: '2012-01-06',
          score: 20
      }
  },
  {
      learner_id: 4,
      assignment_id: 202,
      submission: {
          submitted_at: '2012-01-11',
          score: 80
      }
  },
  {
      learner_id: 4,
      assignment_id: 203,
      submission: {
          submitted_at: "2012-01-17",
          score: 220
      }
  },
  {
      learner_id: 4,
      assignment_id: 204,
      submission: {
          submitted_at: '2012-01-20',
          score: 480
      }
  }
]

console.log(getlearnerdata(courseinfo, assignmentgroups, learnersubmissions));