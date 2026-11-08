// Edit this file to customize the workout. Leave index.html unchanged.
// No personal details or health context belong in this public file.
// Train three days per week, alternating these two templates:
// Week 1: Push / Pull / Push; Week 2: Pull / Push / Pull.
// Lower-body movements stay in both templates; reset a checklist before reusing it.
window.WORKOUT_CONFIG = {
  title: "My workout plan.",
  eyebrow: "WEEKLY ROUTINE",
  subtitle: "3 days/week · Alternate Push / Pull · Active recovery",
  sessions: [
    {id:"push",title:"Push Focus",type:"strength",items:[
      {id:"calf",exercise:"Calf Raise",sets:3,reps:"15–25"},
      {id:"chest",exercise:"Dumbbell Bench Press",sets:3,reps:"10–15"},
      {id:"incline",exercise:"Incline Dumbbell Press",sets:2,reps:"10–15"},
      {id:"extension",exercise:"Leg Extension",sets:3,reps:"12–15"},
      {id:"curl",exercise:"Seated Leg Curl",sets:3,reps:"12–15"},
      {id:"lateral",exercise:"Machine Lateral Raise",sets:3,reps:"12–20"},
      {id:"triceps",exercise:"Cable Triceps Pushdown",sets:2,reps:"12–15"}
    ]},
    {id:"pull",title:"Pull Focus",type:"strength",items:[
      {id:"calf",exercise:"Calf Raise",sets:3,reps:"15–25"},
      {id:"pulldown",exercise:"Neutral-Grip Lat Pulldown",sets:3,reps:"10–15"},
      {id:"row",exercise:"Seated Cable Row",sets:3,reps:"10–15"},
      {id:"extension",exercise:"Leg Extension",sets:3,reps:"12–15"},
      {id:"curl",exercise:"Seated Leg Curl",sets:3,reps:"12–15"},
      {id:"biceps",exercise:"Cable Biceps Curl",sets:3,reps:"12–15"},
      {id:"backext",exercise:"45° Back Extension",sets:2,reps:"12–15"}
    ]},
    {id:"rest",title:"Active Recovery",type:"recovery",subtitle:"Non-training days",items:[
      {id:"walk",exercise:"Walking",prescription:"20–30 min"},
      {id:"ankle",exercise:"Ankle Pumps",prescription:"2 × 20"},
      {id:"stretch",exercise:"Gentle Calf Stretch",prescription:"2 × 20 sec"},
      {id:"relax",exercise:"Relax and Recover",prescription:"10–15 min"}
    ]}
  ],
  // Image slugs reference the one source used by this template.
  exercises: {
    "Calf Raise":{image:"Seated_Calf_Raise",muscles:{calves:1}},
    "Dumbbell Bench Press":{image:"Dumbbell_Bench_Press",muscles:{chest:1,triceps:.35,shoulders:.25}},
    "Incline Dumbbell Press":{image:"Incline_Dumbbell_Press",muscles:{chest:1,shoulders:.4,triceps:.3}},
    "Leg Extension":{image:"Leg_Extensions",muscles:{quads:1}},
    "Seated Leg Curl":{image:"Seated_Leg_Curl",muscles:{hamstrings:1}},
    "Machine Lateral Raise":{image:"Seated_Side_Lateral_Raise",muscles:{shoulders:1}},
    "Cable Triceps Pushdown":{image:"Triceps_Pushdown",muscles:{triceps:1}},
    "Neutral-Grip Lat Pulldown":{image:"V-Bar_Pulldown",muscles:{back:1,biceps:.4}},
    "Seated Cable Row":{image:"Seated_Cable_Rows",muscles:{back:1,biceps:.35,shoulders:.15}},
    "Cable Biceps Curl":{image:"High_Cable_Curls",muscles:{biceps:1}},
    "45° Back Extension":{image:"Hyperextensions_Back_Extensions",muscles:{lowerBack:1,glutes:.7,hamstrings:.3}},
    "Walking":{image:"Walking_Treadmill",muscles:{}},
    "Ankle Pumps":{image:"Ankle_Circles",muscles:{}},
    "Gentle Calf Stretch":{image:"Seated_Calf_Stretch",muscles:{}},
    "Relax and Recover":{image:null,muscles:{}}
  }
};
