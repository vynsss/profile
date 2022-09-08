const app = Vue.createApp({
    data(){
        return {
            experiences: [
                {
                    title: "Frontend Developer",
                    company: "Binus International University",
                    type: "Internship",
                    period: "October '21 - February '22",
                    description: [
                        "Building websites as a frontend developer which complies with the client's requirements with Vue JS",
                        "Integrating the frontend with data from the backend APIs",
                        "Communicate with the clients and supervisor to finalize design and functionality",
                        "Complete projects within the deadlines and fulfills the client's and supervisor requirements",
                    ]
                },
                {
                    title: "Project Manager",
                    company: "National Health Service",
                    type: "Internship",
                    period: "February '21 - May '21",
                    description: [
                        "Manage and coordinate a team of software developer and digital marketers",
                        "Liaising between the project supervisor and the team and provide updates to both side",
                        "Provide instructions for the team based on the requirements",
                    ]
                },
                {
                    title: "Teaching Assistant",
                    company: "Binus International University",
                    type: "Part Time",
                    period: "February '20 - July '20",
                    description: [
                        "Assisted in teaching data structure and algorithm course using C++ as the language"
                    ]
                },
            ],
            skills: [
                {
                    name: "Vue JS",
                    proficiency: 75
                },
                {
                    name: "HTML",
                    proficiency: 70
                },
                {
                    name: "CSS",
                    proficiency: 65
                },
                {
                    name: "JavaScript",
                    proficiency: 65
                },
                {
                    name: "Git",
                    proficiency: 70
                },
                {
                    name: "Vuetify",
                    proficiency: 75
                },
                {
                    name: "Bootstrap",
                    proficiency: 70
                },
            ],
            activities: [
                {
                    name: "BINARY",
                    position: "Secretary",
                    period: "March 2019 - March 2021",
                    source: "./assets/images/binary.jpg",
                    description: [
                        "Vice Secretary on March 2019 to March 2020",
                        "A computer science club in Binus International University",
                        "Writing proposals for events held by the club as well as participating and analyzing the event",
                        "Act as an advisor for the activities held",
                        "Take notes for the plannings and meetings in the club"
                    ],
                    events: [
                        {
                            name: "Binary Leadership Camp (BLC)",
                            year: "2019",
                        },
                        {
                            name: "Binus International CS:GO Competition",
                            year: "2020"
                        }
                    ]
                },
                {
                    name: "Freshmen Enrichment Program",
                    position: "Freshmen Leader",
                    period: "2019",
                    source: "./assets/images/fep-2019.jpg",
                    description: [
                        "Lead the freshmen to familiarize with Binus environment",
                        "Guide the freshmen throughout the orientation according to the rundown and rules specified",
                        "Help the freshmen when they have questions regarding the system or events in Binus"
                    ],
                },
                {
                    name: "Information System Case Competition",
                    position: "Liaison Officer & IT Division",
                    period: "2019 & 2020",
                    source: "./assets/images/iscc-2019.jpg",
                    description: [
                        "Guide the participants to the venue and rundown of the event",
                        "Help the participants to solve any inquiries regarding the competition",
                        "Exchange information from the committee to the participants"
                    ],
                },
            ]
        }
    },
})

app.mount("#app")