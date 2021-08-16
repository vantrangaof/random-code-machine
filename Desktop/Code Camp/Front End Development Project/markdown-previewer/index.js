marked.setOptions({
    breaks: true,
  });

const renderer = new marked.Renderer();

function App() {

    const [text, setText] = React.useState(placeholder)

    return (
        <div className="text-center px-4">
            <h1 className="px-4">My Markdown Previewer</h1>
            <div className="editor-div">
            <h2 className="editor">Editor</h2>
            <textarea 
            name="text" 
            id="editor" 
            rows="10" 
            className="textarea"
            onChange = {(e) => setText(e.target.value)}
            value={text}>    
            </textarea></div>
            <Preview markdown={text}/>
        </div>
    );
}
function Preview({markdown}){
return (
    <div
dangerouslySetInnerHTML={{
    __html: marked(markdown,{renderer: renderer}),
}}
id="preview"
    ></div>
)
}
const placeholder = 
`Hi! Welcome to React Markdown Previewer!
Please clean this Editor and type whatever you want here and see the output below.
But first, note these tips to play around!

# Use this to create a heading
## Use this to create a sub-heading...
### And here's some other cool stuff:

Use 2 back sticks to write a code
 \`<div></div>\`

Use 3 back sticks to create a multi-line code
\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Fat Cat's Logo](https://vantrangaof.com/wp-content/uploads/2021/07/fatcat-logo.png)
`;


ReactDOM.render(<App/>, document.getElementById('root'));