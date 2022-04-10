// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license[0] === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }

  if (license[0] === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }

  if (license[0] === 'Eclipse Public License 1.0') {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  }

  if (license[0] === 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }

  if (license[0] === 'The Perl License') {
    return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license[0] === 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if (license[0] === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  } else if (license[0] === 'Eclipse Public License 1.0') {
    return 'https://opensource.org/licenses/EPL-1.0'
  } else if (license[0] === 'Mozilla Public License 2.0') {
    return 'https://opensource.org/licenses/MPL-2.0'
  } else if (license[0] === 'The Perl License') {
    return 'https://opensource.org/licenses/Artistic-2.0'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license[0] === 'Apache') {
    return `Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`

  } else if (license[0] === 'MIT') {
    return `Copyright <YEAR> <COPYRIGHT HOLDER>

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `
  } else if (license[0] === 'Eclipse Public License 1.0') {
    return `Eclipse Public License, Version 1.0 (EPL-1.0)
    THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.`

  } else if (license[0] === 'Mozilla Public License 2.0') {
    return `Exhibit A - Source Code Form License Notice
    This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
    If it is not possible or desirable to put the notice in a particular file, then You may include the notice in a location (such as a LICENSE file in a relevant directory) where a recipient would be likely to look for such a notice.
    You may add additional accurate notices of copyright ownership.`

  } else if (license[0] === 'The Perl License') {
    return `Copyright (c) 2000-2006, The Perl Foundation.
    Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  # Description
  ${data.description}

  ## Table of Contents

  [License](#license)
  [Installation](#installation)
  [Usage](#Usage)
  [Made With](#madeWith)
  [Contribution](#Contribution)
  [Tests](#tests)

  ## Installation
  To install this application, please follow the steps below:
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Made With
  ${data.madeWith}
   
  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, Please reach out to me via E-mail or Github
   ${data.email}
   ${data.github}

 ## License 
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)} 

`;
}

module.exports = generateMarkdown;
