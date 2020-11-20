import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Home extends Component{
    render(){
        return(
            <div>
                <Mui.Container fixed style={{ fontFamily:'Times-new-roman'}}>  
                    <Mui.Grid container spacing={3}>
                        <Mui.Grid item xs={12} sm={2}>
                                <Mui.Paper><br/>
                                    <center><img src="/wiki.png" width="150"/></center>
                                    <justify><br/>
                                        <p>
                                            <a href="/">Main page</a><br/>
                                            <a href="/">Contents</a><br/>
                                            <a href="/">Current events</a><br/>
                                            <a href="/">Random article</a><br/>
                                            <a href="/"></a>About Wikipedia<br/>
                                            <a href="/"></a>Contact us<br/>
                                            <a href="/">Donate</a><br/>
                                        </p>
                                        <p>Contribute<hr/>
                                            <a href="/">Help</a><br/>
                                            <a href="/">Learn to edit</a><br/>
                                            <a href="/">Community portal</a><br/>
                                            <a href="/">Recent changes</a><br/>
                                            <a href="/">Upload file</a><br/>
                                        </p>
                                        <p>Tools<hr/>
                                            <a href="/">What links here</a><br/>
                                            <a href="/">Related changes</a><br/>
                                            <a href="/">Special pages</a><br/>
                                            <a href="/">Permanent link</a><br/>
                                            <a href="/">Page information</a><br/>
                                            <a href="/">Cite this page</a><br/>
                                            <a href="/">Wikidata item</a><br/>
                                        </p>
                                        <p>Print/export<hr/>
                                            <a href="/">Download as PDF</a><br/>
                                            <a href="/">Printable version</a><br/>
                                        </p>
                                        <p>Languages<hr/>
                                            <a href="/">العربية</a><br/>
                                            <a href="/">Deutsch</a><br/>
                                            <a href="/">Español</a><br/>
                                            <a href="/">Français</a><br/>
                                            <a href="/">हिन्दी</a><br/>
                                            <a href="/">日本語</a><br/>
                                            <a href="/">Português</a><br/>
                                            <a href="/">Русский</a><br/>
                                            <a href="/">中文</a><br/>
                                        </p>
                                    </justify>
                                </Mui.Paper> 
                       </Mui.Grid>
                       <Mui.Grid item xs={12} sm={10}>
                           <Mui.Paper>
                            <p style={{ textAlign:'right'}}>Not logged in&nbsp;&nbsp;&nbsp;<a href="/">Talk</a>&nbsp;&nbsp;&nbsp;<a href="/">Contributions</a>&nbsp;&nbsp;&nbsp;<a href="/">Create account</a>&nbsp;&nbsp;<a href="/">Log in</a></p>
                            <h1>React (web framework)</h1>
                                <hr/>
                                    <p>From Wikipedia, the free encyclopedia</p><br/>
                                    <p>React (also known as React.js or ReactJS) is an <a href="/">open-source, front end, JavaScript library<sup>[3]</sup></a> for building <a href="/">user interfaces</a> or UI components. It is maintained by <a href="/">Facebook</a> and a community of individual developers and companies.<a href="/"><sup>[4][5][6]</sup></a> React can be used as a base in the development of <a href="/">single-page</a> or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for <a href="/">state management</a> and routing.<a href="/"><sup>[7][8]</sup> Redux<sup>[9]</sup></a> and React Router<a href="/"><sup>[10]</sup></a> are respective examples of such libraries. </p>
                                    </Mui.Paper>
                            <Mui.Card variant="outlined"  style={{width:275}}>
                                <Mui.CardContent>
                                    <Mui.Typography  gutterBottom>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a align="center"><b>contents</b> <a href="/">[hide]</a></a>
                                        </Mui.Typography>
                                        <Mui.Typography variant="p" component="p">
                                            1.<a href="/"> Basic Usage</a><br/>
                                            2.<a href="/"> Notable features</a><br/>
                                            &nbsp;&nbsp;&nbsp;2.1 <a href="/">Components</a><br/>
                                            &nbsp;&nbsp;&nbsp;2.2 <a href="/">Functional components</a><br/>
                                            &nbsp;&nbsp;&nbsp;2.3 <a href="/">Class-based components</a><br/>
                                            &nbsp;&nbsp;&nbsp;2.4 <a href="/">Virtual DOM</a><br/>
                                            &nbsp;&nbsp;&nbsp;2.5 <a href="/">Lifecycle methods</a><br/>
                                            &nbsp;&nbsp;&nbsp;2.6 <a href="/">JSX</a><br/>
                                            &nbsp;&nbsp;&nbsp;2.7 <a href="/">Architecture beyond HTML</a><br/>
                                            &nbsp;&nbsp;&nbsp;2.8 <a href="/">React hooks</a><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.8.1 <a href="/">Rules of hooks</a><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.8.2 <a href="/">Custom hooks</a><br/>
                                            3. <a href="/">Common idioms</a><br/>
                                            &nbsp;&nbsp;  &nbsp;3.1 <a href="/">Use of the Flux architecture</a><br/>
                                            4. <a href="/">Future development</a><br/>
                                            5. <a href="/">History</a><br/>
                                            6. <a href="/">Licensing</a><br/>
                                            7. <a href="/">See also</a><br/>
                                            8. <a href="/">References</a><br/>
                                            9. <a href="/">External links</a><br/> 
                                    </Mui.Typography>
                                </Mui.CardContent>
                            </Mui.Card>
                            <br/><h4>Basic Usage&nbsp;[<a href="/"> edit </a>]</h4><hr/>
                                <p>The following is a rudimentary example of React usage in HTML with JSX and JavaScript.</p>
                            <Mui.Card variant="outlined"  style={{width:600}}>
                                <Mui.CardContent>
                                    <Mui.Typography  gutterBottom>
                                    <p>
                                        1.&lt;div id="myReactApp"&gt;&lt;/div&gt;<br/>
                                        2.<br/>
                                        3.&lt;script type="text/babel"&gt;<br/>
                                        4.&nbsp;&nbsp;function Greeter(props) &#123;<br/>
                                        5.&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;&#123;props.greeting&#125;&lt;/h1&gt;<br/>
                                        6.&nbsp;&#125;<br/>
                                        7.&nbsp; var App = &lt;Greeter greeting="Hello World!" /&gt;;<br/>
                                        8.&nbsp;ReactDOM.render(App, document.getElementById('myReactApp'));<br/>
                                        9.&lt;/script&gt;
                                    </p>
                                    
                                    </Mui.Typography>
                                </Mui.CardContent>
                            </Mui.Card>
                            <p>The Greeter function is a React component that accepts a property greeting. The variable App is an instance of the Greeter component where the greeting property is set to 'Hello World!'. The ReactDOM.render method then renders our Greeter component inside the DOM element with id myReactApp. </p>
                            <p>When displayed in a web browser the result will be </p><br/>
                        <Mui.Card variant="outlined"  style={{width:600}}>
                            <Mui.CardContent>
                                <Mui.Typography  gutterBottom>
                                    <p>&lt;div id="myReactApp"&gt;<br/>&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello World!&lt;/h1&gt;<br/>&lt;/div&gt;</p>
                                </Mui.Typography>
                            </Mui.CardContent><br/>
                        </Mui.Card>
                            <font size="5">
                                <p>Notable features<hr/></p>
                            </font>
                            <h4>Components [ <a href="/">edit</a> ]</h4>
                                <p>React code is made of entities called components. Components can be rendered to a particular element in the DOM using the React DOM library. When rendering a component, one can pass in values that are known as "props"<a href="/"><sup>[11]</sup></a>: </p>
                        <Mui.Card variant="outlined"  style={{width:800}}>
                            <Mui.CardContent>
                                <Mui.Typography  gutterBottom>
                                    <p>ReactDOM.render(&lt;Greeter greeting="Hello World!" /&gt;, document.getElementById('myReactApp'));</p>
                                </Mui.Typography>
                            </Mui.CardContent>
                        </Mui.Card>
                        <p>The two primary ways of declaring components in React is via functional components and class-based components. </p><br/>
                        <p><b>Functional components</b>[ <a href="/">edit</a>]</p>
                        <p>Functional components are declared with a function that then returns some JSX. </p>
                        <Mui.Card variant="outlined"  style={{width:800}}>
                            <Mui.CardContent>
                                <Mui.Typography  gutterBottom>
                                    <p>const Greeting = (props) =&gt; &lt;div&gt;Hello, &#123;props.name&#125;!&lt;/div&gt;;</p>
                                </Mui.Typography>
                            </Mui.CardContent>
                        </Mui.Card>
                            <p><b>Class-based components</b>[<a href="/">edit</a>]</p>
                            <p>Class-based components are declared using <a href="/">ES6</a> classes. </p>
                        <Mui.Card variant="outlined"  style={{width:270}}>
                            <Mui.CardContent>
                                <Mui.Typography  gutterBottom>
                                    <p>
                                        class ParentComponent extends React.Component&#123;
                                        &nbsp;&nbsp;state = &#123; color: 'green' &#125;;
                                    </p>
                                </Mui.Typography>
                            </Mui.CardContent>
                        </Mui.Card>
                        </Mui.Grid>
                    </Mui.Grid>
                </Mui.Container>
            </div>  
        )
    }
}

export default Home;