/*
Welcome! 

1) In your web browser, go to the article you want to copy.                                             !~~~~~~~~~~!
2) Copy the article's ID number from the URL (Example: https://perficient.zendesk.com/hc/en-us/articles/360046283354-Welcome-to-the-CPD-Team)

Paste that ID number between the quotation marks on line 9
*/
const articleToBeMoved = "4415879689491";
/*
3) Use the list below to look up the Section ID of the section the article is moving from, and the section the article is moving to.
4) Once your section IDs are in place, hit "Save".
5) From the top ribbon, select "Terminal", and then "New Terminal"
6) In the terminal window at the bottom, type 'npm start' and hit Enter.
*/

const fromSection = "360010640954";

const toSection = "360007827413";

/*

******************** Below is a list of Sections and their cooresponding ID #s ********************

Twilio Flex - Knowledge Base Help - Getting Started = 360007827413
Twilio Flex - Knowledge Base Help - FAQ = 360007771634
Twilio Flex - Onboarding - Getting Started = 360008115314
Twilio Flex - Onboarding - Twilio Platform and Twilio Flex - 360008206973
Twilio Flex - Onboarding - Cloud Platform Usage = 360008436753
Twilio Flex - Onboarding - Contact Center = 360007828213
Twilio Flex - General Team Information/Resources - Administrative = 360008582593
Twilio Flex - General Team Information/Resources - FAQ = 360002747613
Twilio Flex - General Team Information/Resources - Practices, Processes, Procedures = 360002747593
Twilio Flex - General Team Information/Resources - Interviewing Materials/Process = 4408234374163
Twilio Flex - Developer - Logging = 360008209893
Twilio Flex - Developer - Code Sample = 360008040594
Twilio Flex - Developer - Tutorials and Research = 360008029154
Twilio Flex - Developer - Internal IP = 360008028994
Twilio Flex - Developer - Flex Documentation = 360007924234
Twilio Flex - Twilio Support - Twilio SIGNAL Conference Sessions = 360008661193
Twilio Flex - Twilio Support - Procedures = 360008482613
Twilio Flex - Cloud Platform Usage - Platform = 360011720573

Amazon Connect - MSO Internal Documentation - PACE = 1500001355681
Amazon Connect - MSO Internal Documentation - Process & Procedures = 360010640954
Amazon Connect - MSO Internal Documentation - Troubleshooting = 360011767213
Amazon Connect - Managed Service Customer Documentation - Amazon Customers = 4405824645651
Amazon Connect - Managed Service Customer Documentation - PACE Customers = 4405824643603
Amazon Connect - PACE Customer Documentation - Agent Console = 4405816123411
Amazon Connect - PACE Customer Documentation - Prompts Management = 4405824105363
Amazon Connect - PACE Customer Documentation - Calendar Management = 4405824547091
Amazon Connect - PACE Customer Documentation - Handling = 4405816428691
Amazon Connect - PACE Customer Documentation - Widget Management = 4405816422547
Amazon Connect - PACE Customer Documentation - Lex Bot Management = 4405816425875
Amazon Connect - PACE Customer Documentation - Settings Management = 4405824583443
Amazon Connect - PACE Customer Documentation - Reports = 1500001755702
Amazon Connect - PACE Customer Documentation - Other Help Articles = 4551331293843
Amazon Connect - AWS - Contact Lens = 4410663138195
Amazon Connect - AWS - Lex V1 = 4408191519123
Amazon Connect - AWS - Lex V2 = 4564958881171
Amazon Connect - AWS - Voice ID = 4416889490195
Amazon Connect - AWS - Reporting & Metrics Labs = 4405384322835
Amazon Connect - AWS - Contact Flows = 4406974986643
Amazon Connect - AWS - Training & Tutorials = 360008568254
Amazon Connect - Onboarding - Getting Started = 360008182373
Amazon Connect - Onboarding - Amazon Connect = 360007828273
Amazon Connect - Onboarding - Cloud Platform Usage = 360009366793
Amazon Connect - Onboarding - Contact Center = 360007828253
Amazon Connect - Developer Resources - General = 360008436633
Amazon Connect - Developer Resources - AWS = 360008339714
Amazon Connect - Developer Resources - React = 360008436533
Amazon Connect - Developer Resources - Testing = 360008436553
Amazon Connect - Developer Resources - Tutorials and Research = 360008339654
Amazon Connect - General Team Information/Resources - Administrative = 360008362394
Amazon Connect - General Team Information/Resources - FAQ = 360008339694
Amazon Connect - General Team Information/Resources - Practices, Processes, & Procedures = 360008339674
Amazon Connect - Knowledge Base Help - Getting Started = 360007827453
Amazon Connect - Knowledge Base Help - FAQ = 360007827433

MSO - Internal Documentation - DevOps = 4416429291923
MSO - Internal Documentation - PACE KB articles = 4404373597715
MSO - Internal Documentation - General = 1500000751421
MSO - Internal Documentation - Training & Development = 360011745553
MSO - Internal Documentation - Troubleshooting = 360010600454
MSO - Internal Documentation - Error Code Investigation = 360011720593
MSO - Internal Documentation - Twilio Support = 360010600434
MSO - Internal Documentation - KB Guidelines & Best Practices = 360010585854
MSO - Internal Documentation - Process & Procedures = 360008291414
MSO - Twilio Documentation - General = 1500000774282
MSO - Twilio Documentation - Twilio Flex Release Notes = 360004915093
MSO - Twilio Documentation - Troubleshooting = 1500000746781
MSO - Twilio Documentation - Agent & Supervisor Training Documentation- Twilio Native Functionality = 360011704913
MSO - Customer Documentation - General = 360011720413
MSO - Customer Documentation - Innocean- Hyundai = 1500000746761
MSO - Customer Documentation - Neiman Marcus = 1500000633701
MSO - Customer Documentation - 7-Eleven = 360010523174
MSO - Customer Documentation - Mathematica = 360011045213
MSO - Customer Documentation - Washington Crisis Connections = 360008935693
MSO - Customer Documentation - Perficient Internal = 360008315934
MSO - Customer Documentation - Aritzia = 360007645993
MSO - Customer Documentation - CompuCom = 360007615973
MSO - Customer Documentation - Red Rock Technologies (ALC Schools) = 360006113333
MSO - Customer Documentation - American Logistics Corporation (ALC Med/Gov) = 360005657753
MSO - Customer Documentation - Nike = 360005657173

Clarity Connect - Clarity Connect - Connect Help = 360008920733
Clarity Connect - Clarity Connect - Agent Console = 360005262593
Clarity Connect - Clarity Connect - Wesbite = 360005224994
Clarity Connect - Clarity Connect - Chat and Calls = 360005224974
Clarity Connect - Clarity Connect - General Guidelines = 360005262573
Clarity Connect - Clarity Connect - Dashboard = 360005262553
Clarity Connect - Clarity Connect - Reports = 360005224954
Clarity Connect - Clarity Connect - Maintenance Configuration = 360005262533
Clarity Connect - Clarity Connect - IVRs / Call Flows = 360005224934
Clarity Connect - Clarity Connect - Agent Call Rerouter = 360005262493
Clarity Connect - Clarity Connect - Logs = 360005262473
Clarity Connect - Clarity Connect - Pre-Implementation = 360005262453
Clarity Connect - Clarity Connect - Web Gateway = 360005224914
Clarity Connect - Clarity Connect - Installations and Upgrades = 360005262433
Clarity Connect - Clarity Connect - Connect Application Server Maintenance = 360005262413
Clarity Connect - Clarity Connect - Clarity Connect 5.0 = 360005262393
Clarity Connect - Clarity Connect - Partner Guidelines = 360005224834
Clarity Connect - Clarity Connect - Clarity Connect 4.1 = 360005224814
Clarity Connect - Internal Team Guidelines - Internal instances and best practices = 360005225034
Clarity Connect - Internal Team Guidelines - Ticket handling = 360005225014
Clarity Connect - Internal Team Guidelines - Internal = 360005262513
Clarity Connect - Internal Team Guidelines - CMP/Installation Manager - Internal = 360005224854

Converge - Customer Documentation - Intrado/West = 1500002395662
Converge - Clarity Converge - Troubleshooting = 360005223334
Converge - Clarity Converge - Admin Website = 360005261253
Converge - Clarity Converge - General = 360005261233
Converge - Clarity Converge - Lync Environment = 360005223314
Converge - Clarity Converge - Topology Sync = 360005223294
Converge - Clarity Converge - Integration Service = 360005223274
Converge - Clarity Converge - Registrar Service = 360005223254

*/
exports.articleToBeMoved = articleToBeMoved;
exports.toSection = toSection;
exports.fromSection = fromSection;
