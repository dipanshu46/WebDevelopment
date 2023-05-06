// Script injected by topic3.pug
let content = [
    'For Windows,\n<ul id="windows"></ul>',
    'For Linux based,\n<ul id="linux"></ul>'
]

let windows_link = '<a href="https://www.mongodb.com/try/download/community" target="_blank">Windows</a>';
let linux_link = '<a href="https://www.mongodb.com/docs/manual/administration/install-on-linux/" target="_blank">Linux based OS</a>';

let windows_content = [
    `Follow this url: ${windows_link}`,
    'Or, Open your web browser and type: mongodb download center',
    'Then, Go to the Server option',
    'Check for the version, your os and the package to be MSI and hit the download button.',
    'After the download is completed, run the installer click on next until it asks for Setup Type.',
    'Select the Complete option and uncheck the option Install MongoDB as a Service, because we want to run this service on server and not on our pc. Click on Next.',
    'Next will be Install MongoDB Compass. It is the Graphical User Interface for MongoDB. You can install or skip this as per your choice. Click Next and hit Install.'
] 

let linux_content = [
    `Follow this url (recommended): ${linux_link}`,
    'Or, Open your web browser and type: install mongodb in (your linux distribution)'
]

addItem('list', content)
addItem('windows', windows_content)
addItem('linux', linux_content)
createButton('/topic2','/topic3')