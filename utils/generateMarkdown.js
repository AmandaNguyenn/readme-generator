// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

${github}

## Description

${data.description}

## Installation

To install do this...

\`\`\`
${data.installation}
\`\`\`

## License
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)


Contact me:

Email: ${data.email}
Github: ${data.github}

[${data.github}].(https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;

