# gatsby-remark-read-time-estimate

## Description
Gatsby plugin to add an accurate measurement of read time using any content

## Contents
- [Installation](#installation)
- [Parsing algorithm](#parsing-algorithm)
- [Properties](#properties)
- [How to query](#how-to-query)
- [Contribution](#contribution)
- [Questions](#questions)

## Installation
```bash
$ npm i read-time-estimate --save
```

```js
// gatsby-config.js
...
  plugins: [
    ...
    `gatsby-read-time-estimate`,
  ]

```

## Parsing algorithm

It recognizes the content node from the files and adds [read-time-estimate](https://github.com/pritishvaidya/read-time-estimate#output) props to it

## Properties
| Variable  | Type | Description  |
| :------------ | ---------------: | :---------------|
| humanizedDuration | string | Humanized Duration for the input string |
| duration | number | Actual Duration of the input string (in minutes) |
| totalWords | number | Number of words in the input string |
| wordTime | number | Read Time of the words in the input string (in minutes) |
| totalImages | number | Number of images in input string |
| imageTime | number | Read Time of the images in the input string (in minutes) |
| otherLanguageTimeCharacters | number | Chinese / Japanese / Korean language characters count |
| otherLanguageTime | number | Read Time of the Chinese / Japanese / Korean in the input string (in minutes) |

## How to query

A sample GraphQL query to get Read Time Estimate node:

```graphql
{
  allMarkdownRemark {
      nodes {
        fields {
          readTimeEstimate {
            duration
            humanizedDuration
            imageTime
            otherLanguageTime
            otherLanguageTimeCharacters
            totalImages
            totalWords
            wordTime
          }
        }
      }
    }
}
```

## Contribution

- [@pritishvaidya](mailto:contact@pritishvaidya.dev) The main author.

## Questions

Feel free to [contact me](mailto:contact@pritishvaidya.dev) or [create an issue](https://github.com/pritishvaidya/gatsby-read-time-estimate/issues/new)