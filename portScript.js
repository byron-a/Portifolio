let mainBody = document.getElementsByTagName('body')[0]
let cards = document.getElementsByClassName('cards')[0];

// NAV BEHAVIOUR;
let about = document.getElementsByClassName('about')[0];
let myCv = document.getElementsByClassName('myCv')[0];
about.addEventListener('click', function () {
    myCv.classList.toggle('appear');
    
    if (viewAll.className.includes('appear')) {
        viewAll.classList.toggle('appear');
    };
});

let projects = document.getElementsByClassName('projectsNav')[0];
let viewAll = document.getElementsByClassName('viewAll')[0];
// let add = document.getElementsByClassName('add')[0];
projects.addEventListener('click', function () {
    viewAll.classList.toggle('appear');
   
    if (myCv.className.includes('appear')) {
       myCv.classList.toggle('appear');
    };
});

let contact = document.getElementsByClassName("contact")[0];
contact.addEventListener('click', () => {
    if (myCv.className.includes('appear')) {
        myCv.classList.toggle('appear');
    } else if (viewAll.className.includes('appear')) {
        viewAll.classList.toggle('appear');
    };
});

//PROJECT NAV BEHAVIOUR;
let delFunction = (l)=>{
     for (let x of l) {
   cards.removeChild(x);
    }
    return (l.length > 0) ? delFunction(l) : true;
}
//1
let htmlCss = document.querySelector('.htmlCss');
let loadHtml = false;
let htmlBootstrap = document.querySelector('.htmlBootstrap');
let javaScript = document.querySelector('.javascript');
let javaScriptWebpack = document.querySelector('.javascriptWebpack');
let react = document.querySelector('.react');
let reactRedux = document.querySelector('.reactRedux');
//** */
let navHighlight = [htmlCss, htmlBootstrap, javaScript, javaScriptWebpack, react, reactRedux];
let highLight = "background-color: #d6e5f0; cursor: pointer; font-weight: bold;  color: black; box-shadow: 0 0 2px 3px #738793;"
//** */
let next = document.querySelector('.next');
//** */
htmlCss.addEventListener('click', loadHtmlCss);
function loadHtmlCss() {
    htmlCss.style.cssText = highLight;
    let load = "./store.json";
    if (loadHtml) {
    
       for (let h of navHighlight) {
        if (h.style.cssText) {
            h.style.cssText = '';
            htmlCss.style.cssText = highLight;
        }
    }
        fetch(load)
            .then((res) => res.json())
            .then((data) => {
                let n = 0;
                let delAccess = true;
                for (let x of data) {
                    if (x.cardHTML) {
                        n++;
                        if (n > 6) {
                            break;
                        }
                        let create = document.createElement('div');
                        create.innerHTML = x.cardHTML;
                        if (cards.hasChildNodes() && delAccess == true) {
                            console.log('i enter');
                            let l = cards.children;
                        
                            delFunction(l);
                            cards.appendChild(create);
                            delAccess = false;
                        } else {
                            cards.appendChild(create);
                        }
                            
                    }
                     
                }
                if (n < 6) {
                    next.style.display = 'none';
                } else {
                    next.innerHTML = '<h3><a href="./portfolioNext.html#HCSS" target="_self">Show all ></a></h3>'
                    next.style.display = 'block';
                }
            })
    } else {
        fetch(load)
            .then((res)=>res.json())
                .then((data) => {
                    let n = 0;
                    loadHtml = true;
                    for (let x of data) {
                        if (x.cardHTML) {
                                n++;
                    if (n > 6) {
                        break;
                    }
                    let create = document.createElement('div');
                    create.innerHTML = x.cardHTML;
                    cards.appendChild(create);
                            
                        }
                    
                    }
                    if (n < 6) {
                        next.style.display = 'none';
                    } else {
                        next.innerHTML = '<h3><a href="./portfolioNext.html#HCSS" target="_self">Show all ></a></h3>'
                        next.style.display = 'block';
                    }
                
            })
    }
            
}

//2
htmlBootstrap.addEventListener('click', loadHtmlBootstrap);

function loadHtmlBootstrap() {
    for (let h of navHighlight) {
        if (h.style.cssText) {
            h.style.cssText = '';
            htmlBootstrap.style.cssText = highLight;
        }
    }
   
    let load = "./store.json";
            fetch(load)
            .then((res)=>res.json())
                .then((data) => {
                    let n = 0;
                    let delAccess = true;
                    for (let x of data) {
                        if (x.cardBootstrap) {
                            n++;
                            if (n > 6) {
                             break;
                            }
                            let create = document.createElement('div');
                            create.innerHTML = x.cardBootstrap;
                            if (cards.hasChildNodes() && delAccess == true) {
                                console.log('i enter');
                                let l = cards.children;
                        
                                delFunction(l);
                                cards.appendChild(create);
                                delAccess = false;
                            } else {
                                cards.appendChild(create);
                            }
                            
                     }
                     
                    }
                    if (n < 6) {
                        next.style.display = 'none';
                    } else {
                        next.innerHTML = '<h3><a href="./portfolioNext.html#HBoot" target="_self">Show all ></a></h3>'
                        next.style.display = 'block';
                    }
                
            })
}

//3
javaScript.addEventListener('click', loadJavaScript);

function loadJavaScript() {
    for (let h of navHighlight) {
        if (h.style.cssText) {
            h.style.cssText = '';
            javaScript.style.cssText = highLight;
        }
    }
   
    let load = "./store.json";
            fetch(load)
            .then((res)=>res.json())
                .then((data) => {
                    let n = 0;
                    let delAccess = true;
                    for (let x of data) {
                        if (x.cardJavaS) {
                            n++;
                           if (n > 6) {
                            break;
                            }
                           let create = document.createElement('div');
                            create.innerHTML = x.cardJavaS;
                            if (cards.hasChildNodes() && delAccess == true) {
                                let l = cards.children;
                                console.log('i enter');
                                delFunction(l);
                                cards.appendChild(create);
                                delAccess = false;
                            } else {
                                cards.appendChild(create);
                            }
                            
                     }
                     
                    }
                    if (n < 6) {
                        next.style.display = 'none';
                    } else {
                        next.innerHTML = '<h3><a href="./portfolioNext.html#Java" target="_self">Show all ></a></h3>'
                        next.style.display = 'block';
                    }
                
            })
}

//4
javaScriptWebpack.addEventListener('click', loadJavaScriptPack)
function loadJavaScriptPack() {
    alert('Project Upload Soon!')
}

//5
react.addEventListener('click', loadReact);

function loadReact() {
    for (let h of navHighlight) {
        if (h.style.cssText) {
            h.style.cssText = '';
            react.style.cssText = highLight;
        }
    }
   
    let load = "./store.json";
            fetch(load)
            .then((res)=>res.json())
                .then((data) => {
                    let n = 0;
                    let delAccess = true;
                    for (let x of data) {
                        if (x.cardReact) {
                            n++;
                           if (n > 6) {
                            break;
                            }
                           let create = document.createElement('div');
                            create.innerHTML = x.cardReact;
                            if (cards.hasChildNodes() && delAccess == true) {
                                let l = cards.children;
                                console.log('i enter');
                                delFunction(l);
                                cards.appendChild(create);
                                delAccess = false;
                            } else {
                                cards.appendChild(create);
                            }
                            
                     }
                     
                    }
                    if (n < 6) {
                        next.style.display = 'none';
                    } else {
                        next.innerHTML = '<h3><a href="./portfolioNext.html#Reac" target="_self">Show all ></a></h3>'
                        next.style.display = 'block';
                    }
                
            })
}

//6
reactRedux.addEventListener('click', loadReactRdx)
function loadReactRdx() {
    window.alert('Project Upload Soon!')
}
