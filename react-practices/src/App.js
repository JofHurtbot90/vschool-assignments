import React, {Component} from 'react';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         Hello World!!!
//       </div>
//     );
//   }
// }

// ------Nested Elements--------/
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Header</h1>
//         <h2>Content</h2>
//         <p>This is the content!!!</p>
//       </div>
//     );
//   }
// }

// ---------JS Expressions--------/

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>
//           {1+1}
//         </h1>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     let i = 1;
//     return (
//       <div>
//         <h1>{i === 1 ? `True!` : `False`}</h1>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     return(
//       <div>
//
//         <h1>{1+2}</h1>
//         <h1>{2+2}</h1>
//         <h1>{4*5}</h1>
//
//       </div>
//     );
//   }
// }

// ----------Styling-----------/

// class App extends React.Component {
//   render() {
//     let myStyle = {
//       fontSize: 100,
//       color: `#FF0000`
//     }
//     return (
//       <div>
//         <h1 style = {myStyle}>Header</h1>
//       </div>
//     );
//   }
// }


// --------Stateless Example--------/

// class App extends React.Component {
//   render() {
//     return(
//       <div>
//         <Header/>
//         <Content/>
//       </div>
//     );
//   }
// }
//
// class Header extends React.Component {
//   render() {
//     return(
//       <div>
//         <h1>Header</h1>
//       </div>
//     );
//   }
// }
//
// class Content extends React.Component {
//   render() {
//     return(
//       <div>
//         <h1>Content</h1>
//         <p>The content text!!!</p>
//       </div>
//     );
//   }
// }

// ---------State-------/

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       header: `Header from state...`,
//       content: `Content from state...`
//     }
//   }
//   render() {
//     return(
//       <div>
//         <h1>{this.state.header}</h1>
//         <h2>{this.state.content}</h2>
//       </div>
//     );
//   }
// }

// ---------Props---------/

// class App extends React.Component {
//   render() {
//     return(
//       <div>
//         <h1>{this.props.headerProp}</h1>
//         <h2>{this.props.contentProp}</h2>
//       </div>
//     );
//   }
// }

// ------------Default Props---------/

// class App extends React.Component {
//   render() {
//     return(
//       <div>
//         <h1>{this.props.headerProp}</h1>
//         <h2>{this.props.contentProp}</h2>
//       </div>
//     )
//   }
// }
// App.defaultProps = {
//   headerProp: 'Header from props...',
//   contentProp: 'Content from props...'
// }

// -----------State and Props-------/

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//       this.state = {
//         header: `Header from props...`,
//         content: `Content from props...`
//       }
//     }
//   render() {
//     return(
//         <div> <Header headerProp ={this.state.header}/>
//           <Content contentProp = {this.state.content}/>
//         </div>
//       );
//     }
// }
//
// class Header extends React.Component {
//   render() { return(
//     <div>
//       <h1>{this.props.headerProp}</h1>
//     </div>
//     );
//   }
// }
// class Content extends React.Component {
//   render() {
//     return(
//       <div>
//         <h2>{this.props.contentProp}</h2>
//       </div>
//     );
//   }
// }

// ----------Keys-----------/

// class App extends React.Component {
//   constructor() {
//     super();
//
//     this.state = {
//       data: [
//         {
//           component: `First...`,
//           id: 1
//
//         },
//         {
//           component: `Second...`,
//           id: 2
//         },
//         {
//           component: `Third...`,
//           id: 3
//         }
//       ]
//     }
//   }
//   render() {
//     return(
//       <div>
//         <div>
//           {this.state.data.map((dynamicComponent, i) => <Content key = {i}   componentData = {dynamicComponent}/>)}
//         </div>
//       </div>
//     );
//   }
//
// }
//
// class Content extends React.Component {
//   render() {
//     return(
//       <div>
//         <div>{this.props.componentData.component}</div>
//       <div>{this.props.componentData.id}</div>
//       </div>
//     );
//   }
// }



export default App;
