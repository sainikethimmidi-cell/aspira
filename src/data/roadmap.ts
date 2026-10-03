export type Stage = { title: string; desc: string; resources: string[] }

export const placementSDE: Stage[] = [
  { title: 'Start', desc: 'Register, add your LeetCode, GFG and LinkedIn links, pick your track and role.', resources: ['Onboarding'] },
  { title: 'Programming and DSA basics', desc: 'Arrays, strings, recursion, sorting and searching.', resources: ['DSA links', 'LeetCode'] },
  { title: 'Advanced DSA', desc: 'Linked lists, stacks, queues, trees, graphs and dynamic programming.', resources: ['DSA links', 'LeetCode', 'GFG'] },
  { title: 'Core CS subjects', desc: 'DBMS, Operating Systems, Computer Networks, SQL, Software Engineering.', resources: ['PDF notes'] },
  { title: 'Aptitude', desc: 'Quantitative aptitude and logical reasoning practice.', resources: ['Aptitude resources'] },
  { title: 'Verbal and communication', desc: 'Verbal ability, speaking practice and group discussion.', resources: ['Verbal resources'] },
  { title: 'Projects and resume', desc: 'Build 2 to 3 projects and polish your resume and LinkedIn.', resources: ['Resources'] },
  { title: 'Mock interviews', desc: 'Take AI interviews (technical and HR) and review the feedback reports.', resources: ['Interview Studio'] },
  { title: 'Company prep and apply', desc: 'Study target companies, past questions, alumni advice and campus drives.', resources: ['Companies', 'Alumni', 'Placement'] },
  { title: 'Placed', desc: 'Offer received. Share your success story.', resources: ['Success stories'] },
]
