export const fakeImage = {
  url: "/fake-image.jpg",
  __typename: "FileField" as const,
  id: "test",
  alt: "Fake Image",
  width: 500,
  height: 500,
}

export const fakeStructuredText = {
  value: {
    schema: "dast",
    document: {
      type: "root",
      children: [
        {
          type: "heading",
          level: 2,
          children: [
            {
              type: "span",
              value: "This an H2 heading followed by lorem",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              url: "https://www.google.com",
              type: "link",
              children: [
                {
                  type: "span",
                  value: "This is a link",
                },
              ],
            },
            {
              type: "span",
              marks: ["code"],
              value: "this is code",
            },
            {
              type: "span",
              value:
                " libero eget elit. Aliquam quam felis, sagittis vitae felis aliquam, mollis vehicula ex. ",
            },
            {
              type: "span",
              marks: ["code"],
              value: "Phasellus",
            },
            {
              type: "span",
              value: " vel pellentesque neque. ",
            },
            {
              type: "span",
              marks: ["strong"],
              value: "Proin efficitur neque at dictum ullamcorper",
            },
            {
              type: "span",
              value: ". ",
            },
            {
              type: "span",
              marks: ["code"],
              value: "Phasellus",
            },
            {
              type: "span",
              value:
                " tempor lacinia orci et ultrices. Aenean condimentum faucibus erat ut scelerisque. Phasellus ut iaculis metus. Fusce eget feugiat justo. Nullam non blandit magna. Morbi bibendum lectus et elit luctus, id faucibus tellus vestibulum. Sed at feugiat nulla, ac laoreet leo. Aliquam erat volutpat.",
            },
          ],
        },
        {
          type: "heading",
          level: 3,
          children: [
            {
              type: "span",
              value: "This ones an H3 with more lorem and an image",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              type: "span",
              value:
                "Praesent maximus, mi in luctus posuere, est tellus egestas est, quis tempus nisi libero eget elit. Aliquam quam felis, sagittis vitae felis aliquam, mollis vehicula ex. ",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              type: "span",
              value: "And some button.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              item: "58223041",
              type: "inlineItem",
            },
            {
              item: "133580299",
              type: "inlineItem",
            },
          ],
        },
        {
          item: "61411728",
          type: "block",
        },
        {
          type: "paragraph",
          children: [
            {
              type: "span",
              marks: ["emphasis"],
              value:
                "Aenean condimentum faucibus erat ut scelerisque. Phasellus ut iaculis metus. Fusce eget feugiat justo. Nullam non blandit magna. Morbi bibendum lectus et elit luctus, id faucibus tellus vestibulum. Sed at feugiat nulla, ac laoreet leo. Aliquam erat volutpat.",
            },
          ],
        },
        {
          type: "heading",
          level: 4,
          children: [
            {
              type: "span",
              value: "Here is an H4 with a  JS code block and more lorem",
            },
          ],
        },
        {
          code: "module.exports = {\n  images: {\n    domains: ['localhost', 'justinwallace.dev', 'www.datocms-assets.com'],\n  },\n  webpack(config) {\n    config.module.rules.push({\n      test: /\\.svg$/,\n      use: ['@svgr/webpack', 'url-loader'],\n    });\n\n    return config;\n  },\n  redirects: async () => [\n    {\n      source: '/resume',\n      destination: '/resume.pdf',\n      permanent: true,\n    },\n  ],\n};",
          type: "code",
          language: "javascript",
        },
        {
          type: "paragraph",
          children: [
            {
              type: "span",
              value: "Aenean condimentum faucibus erat ut scelerisque.",
            },
            {
              type: "span",
              marks: ["underline"],
              value:
                " Phasellus ut iaculis metus. Fusce eget feugiat justo. Nullam non blandit magna.",
            },
            {
              type: "span",
              value:
                " Morbi bibendum lectus et elit luctus, id faucibus tellus vestibulum. Sed at feugiat nulla, ac laoreet leo. Aliquam erat volutpat.",
            },
          ],
        },
        {
          code: "# add deps\nyarn add typescript@latest -D \n",
          type: "code",
          language: "shell",
        },
        {
          type: "heading",
          level: 5,
          children: [
            {
              type: "span",
              value: "This fella is an H5 and he is introducing the quote block",
            },
          ],
        },
        {
          type: "blockquote",
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "span",
                  value:
                    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
                },
              ],
            },
          ],
          attribution: "The internet",
        },
        {
          type: "paragraph",
          children: [
            {
              type: "span",
              value:
                "Making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
            },
          ],
        },
        {
          type: "heading",
          level: 6,
          children: [
            {
              type: "span",
              value: "Last and NOT least ist he H6 with our lists",
            },
          ],
        },
        {
          type: "list",
          style: "numbered",
          children: [
            {
              type: "listItem",
              children: [
                {
                  type: "paragraph",
                  children: [
                    {
                      type: "span",
                      value: "An unordered list",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              children: [
                {
                  type: "paragraph",
                  children: [
                    {
                      type: "span",
                      value: "And all of its numbers",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              children: [
                {
                  type: "paragraph",
                  children: [
                    {
                      type: "span",
                      value: "Are first (as you can see)",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              type: "span",
              value: "But then we have the:",
            },
          ],
        },
        {
          type: "list",
          style: "bulleted",
          children: [
            {
              type: "listItem",
              children: [
                {
                  type: "paragraph",
                  children: [
                    {
                      type: "span",
                      value: "Unordered list and ",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              children: [
                {
                  type: "paragraph",
                  children: [
                    {
                      type: "span",
                      value: "All of its super cool check marks",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              children: [
                {
                  type: "paragraph",
                  children: [
                    {
                      type: "span",
                      value: "that make you want to complete tasks",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  links: [
    {
      id: "58223041",
      variant: "contained",
      label: "More about",
      url: "https://www.justinwallace.dev/about",
      disabled: false,
      startIcon: "",
      endIcon: "",
    },
    {
      id: "133580299",
      variant: "outlined",
      label: "Full Writeup",
      url: "https://www.justinwallace.dev/blog/building-a-spotify-widget-using-electron",
      disabled: false,
      startIcon: "next",
      endIcon: "",
    },
  ],
  blocks: [
    {
      id: "61411728",
      media: {
        title: "react-workflow-cli",
        __typename: "FileField",
        id: "22586956",
        alt: "The help screen of the React Workflow CLI",
        blurhash: "L35=FQ_N%Loz%htRslxuNGRjs9xa",
        height: 634,
        width: 998,
        url: "https://www.datocms-assets.com/85391/1668971912-reactworkflow-3.png",
      },
    },
  ],
}
