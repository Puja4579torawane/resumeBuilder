let availablekeyword=[
    'Seeking a beginner role to enhance and explore my technical knowledge gained at Xyz University in the last three years. I hold a B.Tech degree from XYZ college and won the quiz challenge held at the campus.',
    'A highly skilled, competent, and diligent individual is seeking an opportunity to establish a career as a Data Analyst. Certified with Diploma in Data Analytics from ABC University. Strong willingness to exhibit my proficiency in Analytical tools, Statistics and Computing Methodologies in the professional environment.',
    'Strong in design and integration with intuitive problem-solving skills. Proficient in JAVA, C#, PYTHON, JAVASCRIPT, and SQL. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.',
    'Seeking the position to utilize my skills and abilities in the Computer and Information Technology industry that offers professional growth while being resourceful, innovative and flexible.',
    'To work for my career growth and better prospects, which contribute to the productivity and profitability of the organization  Detail oriented with an analytical bent of mind and possess positive attitude Have been proactive and focused as a student Proficiency at grasping new technical concepts quickly & utilising it in a productive manner.',
    'Enriched with the latest trends, techniques and wide range of skills in Quality Initiatives, Technology, Critical Thinking, Troubleshooting, Problem Analysis and Resolution and people management with 6 years and 4 months of experience as software development engineer.',
    'An enthusiastic fresher with highly motivated and leadership skills having bachelors of engineering degree in Mechanical Engineering. Expert in implementation of each step of project  Eager to learn new technologies and methodologies.',
    'To work for an organization which provides me the opportunity to improve my skills and knowledge to growth along with the organization objective.',
    'Highly motivated and eager to learn new things. Strong motivational and leadership skills Ability to produce best result in pressure situation. Excellent communication skills in written and verbal both. Ability to work as individual as well as in group.',
    'Excellent know how on Economic theories and accounting Strong problem solving ability Good communication skills, Ability to deal with people diplomatically, Quick learner',
    'Seeking a challenging position in the field of economics and accounting so as to utilize my skills for organization and individual growth.',
    'Have a quality for adopting new concepts of studies as well as responsibilities.Able to achieve immediate and long term goals. Understand student’s needs.Can create a comfortable learning environment.Easily get involve with the new people.Good explanation skills.',
    'Looking for an organization where I can enhance my knowledge and from my academic learning give my best to the organization.',
    'Seeking for a job to pursue a highly rewarding career and healthy work environment where I can utilize my skills and knowledge efficiently for the organizational growth.',
    'Hardworker. Willingness to learn new things. Disciplined & good etiquette. Positive Thinker.',
    'To obtain a creative and challenging position in an organization that gives me an opportunity for self improvement and leadership, while contributing to the symbolic growth of the organization with my technical, innovative and logical skills',
    'Flexibility and Adaptability to work in any environment. Willingness to accept any challenge irrespective of its complexity. Good team player and positive attitude',
    'IT Professional seeking a challenging and rewarding opportunity with an organization of repute which recognizes and utilizes my true potential while nurturing my analytical and technical skills in the field of IT.'
  ];

  let example2=[
    'Hardworker.Willingness to learn new things Disciplined & good etiquette. Positive Thinker.',
    'Seeking for an entry level position in the teaching line to share my knowledge for the growth of the students as well as the organization.',
   'Seeking for a job to pursue a highly rewarding career and healthy work environment where I can utilize my skills and knowledge efficiently for the organizational growth.',
   'Looking for an organization where I can enhance my knowledge and from my academic learning give my best to the organization.', 
   'Seeking a challenging position in the field of economics and accounting so as to utilize my skills for organization and individual growth.',
   'To work for an organization which provides me the opportunity to improve my skills and knowledge to growth along with the organization objective.',
   'Seeking the position to utilize my skills and abilities in the Computer and Information Technology industry that offers professional growth while being resourceful, innovative and flexible.'
  ];
  const resultBox=document.querySelector(".result-box");
  const inputBox=document.getElementById("input-box");
  
  inputBox.onkeyup=function(){
      let result = [];
      let input = inputBox.value;
      if(input.length){
          result=availablekeyword.filter((keyword)=>{
             return  keyword.toLowerCase().includes(input.toLowerCase());
          });
          console.log(result);
      }
      display(result);
      if(!result.length){
            const content =example2.map((list)=>{
                return"<li onclick=selectInput(this)>"+list+"</li>";
            });
            resultBox.innerHTML="<ul>"+content.join('')+"</ul>";    
      }
  }
  
  function display(result){
      const content = result.map((list)=>{
          return"<li onclick=selectInput(this)>"+list+"</li>";
      });
      resultBox.innerHTML="<ul>"+content.join('')+"</ul>";
  }
  
  function selectInput(list){
      inputBox.value=list.innerHTML;
      resultBox.innerHTML='';
  }