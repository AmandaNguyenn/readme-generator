// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

${data.github}

## Description

${data.description}

## Installation

To install do this...

\`\`\`
${data.installation}
\`\`\`

To test do this...
\`\`\`
${data.test}
\`\`\`

How to Use:
\`\`\`
${data.usage}
\`\`\`

How can you contribute?
\`\`\`
${data.contributing}
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

