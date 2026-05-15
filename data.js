const MODULES = [
  { id:'intro', icon:'✨', title:'Introduction to Power BI', description:'Understand BI, reports, dashboards, and the Power BI ecosystem.' },
  { id:'install', icon:'💻', title:'Install & Setup', description:'Install Power BI Desktop and learn the interface.' },
  { id:'data', icon:'🗄️', title:'Import Data', description:'Connect to CSV, Excel, web, and database sources.' },
  { id:'query', icon:'🧹', title:'Power Query & Cleaning', description:'Clean messy data and create repeatable transformations.' },
  { id:'modeling', icon:'🔗', title:'Data Modeling', description:'Create relationships, star schemas, and date tables.' },
  { id:'visuals', icon:'📊', title:'Visuals & Interactivity', description:'Build charts, slicers, filters, and drill-through pages.' },
  { id:'dax', icon:'ƒx', title:'DAX Fundamentals', description:'Write measures, calculated columns, and KPI logic.' },
  { id:'publish', icon:'🚀', title:'Dashboards, Publishing & Capstone', description:'Polish, publish, share, and complete the final project.' }
];

const LESSONS = [
  ['intro','what-is-power-bi','What is Power BI?','Learn where Power BI fits in the analytics workflow.',8,['Define business intelligence','Compare reports and dashboards','Identify Power BI Desktop, Service, and Mobile']],
  ['intro','course-roadmap','Course Roadmap','See the full path from beginner to portfolio-ready analyst.',6,['Review the 8-module journey','Understand the final capstone','Set a learning goal']],
  ['intro','first-dashboard-thinking','Think Like a Dashboard Designer','Learn how to turn business questions into visuals.',10,['Start with stakeholders','Define metrics','Sketch an executive dashboard']],
  ['install','install-desktop','Install Power BI Desktop','Install Power BI Desktop and open your first blank report.',10,['Download Power BI Desktop','Open report/canvas/data/model views','Save your first .pbix file']],
  ['install','interface-tour','Interface Tour','Get comfortable with panes, ribbons, fields, and visuals.',12,['Find the Visualizations pane','Locate Fields and Filters','Switch between report, data, and model views']],
  ['install','workspace-basics','Workspace Basics','Understand files, workspaces, and publishing terminology.',9,['Define PBIX','Understand workspaces','Compare Desktop vs Service']],
  ['data','import-csv','Import a CSV','Load a simple sales CSV and inspect columns.',12,['Get data from Text/CSV','Check data types','Load the data into the model']],
  ['data','import-excel','Import Excel Workbooks','Connect to Excel sheets and named tables.',12,['Choose Excel source','Select sheets/tables','Fix headers before loading']],
  ['data','data-profiling','Data Profiling','Use column quality, distribution, and profile tools.',14,['Enable column quality','Find nulls and errors','Spot outliers']],
  ['query','power-query-editor','Power Query Editor','Learn the editor used to transform data before modeling.',14,['Open Transform Data','Review applied steps','Rename queries clearly']],
  ['query','clean-missing-values','Clean Missing Values','Replace, remove, or handle blanks safely.',16,['Identify missing values','Choose remove vs replace','Document assumptions']],
  ['query','split-merge-columns','Split and Merge Columns','Reshape columns into analysis-ready fields.',14,['Split by delimiter','Merge text columns','Set correct data types']],
  ['query','append-merge','Append and Merge Queries','Combine multiple tables with append and merge.',18,['Append monthly files','Merge lookup tables','Validate row counts']],
  ['modeling','relationships','Create Relationships','Connect fact and dimension tables correctly.',16,['Identify fact tables','Identify dimension tables','Create one-to-many relationships']],
  ['modeling','star-schema','Star Schema Basics','Design a clean model that makes DAX easier.',18,['Separate facts and dimensions','Avoid many-to-many where possible','Hide technical keys']],
  ['modeling','date-table','Create a Date Table','Build a date table for time intelligence.',18,['Create date table','Mark as date table','Relate to transaction dates']],
  ['visuals','basic-visuals','Basic Visuals','Create bar, line, card, and table visuals.',15,['Create a bar chart','Add KPI cards','Format labels and titles']],
  ['visuals','slicers-filters','Slicers and Filters','Add interactivity to reports.',15,['Add slicers','Use visual/page/report filters','Test user interactions']],
  ['visuals','drill-through','Drill-through Pages','Build a details page users can right-click into.',16,['Create detail page','Add drill-through field','Add back button']],
  ['dax','dax-measures','DAX Measures','Write your first reusable calculations.',18,['Create Total Sales','Create Total Quantity','Format numeric measures']],
  ['dax','calculated-columns','Calculated Columns','Know when to create row-level columns.',14,['Create margin column','Compare column vs measure','Avoid unnecessary columns']],
  ['dax','calculate-filter-context','CALCULATE and Filter Context','Understand the most important DAX idea.',22,['Explain filter context','Use CALCULATE','Create filtered measures']],
  ['dax','time-intelligence','Time Intelligence','Create YTD and previous-period measures.',20,['Use date table','Create Sales YTD','Compare to previous month']],
  ['publish','dashboard-design','Dashboard Design Principles','Make reports clear, useful, and beautiful.',18,['Choose layout grid','Use consistent formatting','Reduce clutter']],
  ['publish','publish-capstone','Publish and Capstone Prep','Prepare your final project and sharing plan.',20,['Review requirements','Export/publish report','Write dashboard summary']]
].map((l, i) => ({ moduleId:l[0], slug:l[1], title:l[2], summary:l[3], minutes:l[4], steps:l[5], xp:50, id:`lesson-${i+1}` }));

const QUIZZES = [
  { slug:'power-bi-basics', title:'Power BI Basics', questions:[
    ['Which Power BI tool is mainly used to build PBIX report files?', ['Power BI Desktop','PowerPoint','Excel Online','GitHub Pages'],0,'Power BI Desktop is the authoring tool for PBIX reports.'],
    ['What is a dashboard usually optimized for?', ['Quick monitoring of key metrics','Writing SQL only','Storing raw files','Editing images'],0,'Dashboards summarize key metrics for fast decisions.'],
    ['What should come before choosing visuals?', ['The business question','The font size','The file name','The icon set'],0,'Start with the question, then choose visuals.']
  ]},
  { slug:'data-cleaning', title:'Data Cleaning', questions:[
    ['Where do you usually clean data in Power BI?', ['Power Query Editor','Paint','GitHub Issues','Power BI Mobile'],0,'Power Query Editor handles repeatable transformations.'],
    ['What are Applied Steps?', ['Recorded transformation steps','Dashboard bookmarks','DAX variables','User accounts'],0,'Applied Steps record each query transformation.'],
    ['Before removing rows, you should usually check:', ['Impact on analysis','Button color','Page zoom','Monitor size'],0,'Data cleaning decisions can change business results.']
  ]},
  { slug:'data-modeling', title:'Data Modeling', questions:[
    ['A star schema usually has:', ['Fact and dimension tables','Only one table','Only images','No relationships'],0,'Facts hold events; dimensions describe them.'],
    ['A date table helps with:', ['Time intelligence','CSS styling','File compression','PDF export only'],0,'Date tables are required for robust time intelligence.'],
    ['Best relationship direction for most beginner models:', ['Single direction','Random direction','Circular direction','No direction'],0,'Single direction is simpler and safer in most models.']
  ]},
  { slug:'dax-fundamentals', title:'DAX Fundamentals', questions:[
    ['A measure is calculated:', ['At query time based on context','Only during install','Only once forever','Inside GitHub'],0,'Measures respond to filters and visuals.'],
    ['The most important DAX function to modify filter context is:', ['CALCULATE','SUMMARIZECOLUMNS only','FORMAT only','CONCATENATE only'],0,'CALCULATE changes filter context.'],
    ['Measures are generally better than calculated columns for:', ['Aggregations','Static row labels only','Raw CSV storage','Images'],0,'Aggregations should usually be measures.']
  ]},
  { slug:'final-exam', title:'Final Exam', final:true, questions:[
    ['What is the best first step in a BI project?', ['Clarify business questions','Pick random colors','Publish immediately','Delete source data'],0,'Clear questions drive the whole project.'],
    ['Which layer should clean repeatable source issues?', ['Power Query','Final screenshot','Browser cache','Domain DNS'],0,'Power Query is for repeatable cleaning.'],
    ['A good dashboard should be:', ['Clear, focused, and actionable','Crowded with every field','Only decorative','Hidden from users'],0,'Dashboards should support decisions.'],
    ['For YTD calculations, you need a reliable:', ['Date table','Button component','Git commit message','Logo only'],0,'Time intelligence needs a date table.']
  ]}
];

const RESOURCES = [
  ['DAX cheat sheet','SUM, AVERAGE, COUNTROWS, DIVIDE, CALCULATE, FILTER, ALL, VALUES, DATESYTD.'],
  ['Cleaning checklist','Check types, blanks, duplicates, outliers, headers, currency/date formats, and row counts.'],
  ['Dashboard principles','Lead with key KPIs, use consistent colors, align elements, and remove non-essential visuals.'],
  ['Common terms','Fact table, dimension table, relationship, measure, calculated column, filter context, slicer.']
];

const DATASETS = [
  { name:'sales_sample.csv', rows:[['Date','Region','Product','Sales','Quantity'],['2026-01-05','North','Laptop','2400','3'],['2026-01-07','South','Mouse','120','10'],['2026-02-03','West','Monitor','800','2']]},
  { name:'customers_sample.csv', rows:[['CustomerID','Segment','City'],['C001','Enterprise','Tashkent'],['C002','SMB','Samarkand'],['C003','Consumer','Bukhara']]},
  { name:'expenses_sample.csv', rows:[['Month','Category','Amount'],['Jan','Software','350'],['Jan','Marketing','1200'],['Feb','Training','500']]}
];
