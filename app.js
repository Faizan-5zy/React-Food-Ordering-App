// 1

const heading = React.createElement('h1',{id:'heading'},'Hello world namaste javascript')

console.log(heading) //object

const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(heading) //rendering object and converting to tag


//2 nesting of html structure to react element

/* <div id="parent">
<div id="child">
<h1>im h1 tag</h1>
<h2>im h2 tag</h2>
</div>
</div> */


// const parent = React.createElement('div',{id:'parent'},
//     React.createElement('div',{id:'child'},
//                   [
//                       React.createElement('h1',{},'im h1 tag'),
//                       React.createElement('h2',{},'im h2 tag')
//                   ] 
//                 ))
  
                
// 2b 

/* <div id="parent">
        <div id="child">
            <h1>im h1 tag</h1>
            <h2>im h2 tag</h2>
        </div>
        <div id="child2">
            <h1>im h1 tag</h1>
            <h2>im h2 tag</h2>
        </div>
    </div>
 */




    const parent = React.createElement('div',{id:'parent'},
        [

            React.createElement('div',{id:'child'},
                [ React.createElement('h1',{},'im h1 tag') ,
                    React.createElement('h2',{},'im h2 tag')
                ]),
               
            React.createElement('div',{id:'child2'},
                [ React.createElement('h1',{},'im h1 tag') ,
                        React.createElement('h2',{},'im h2 tag')
                 
                ])
        ]
        )
                
console.log(parent)

root.render(parent) //rendering object and converting to tag


    // this is  core react
    // using jsx it makes easier to write  