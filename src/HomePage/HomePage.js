import React from 'react'

function HomePage() {
  return (
    <main className="center" id="main">

        <div className="page-area">

            <article>
                <h1>Stay on track</h1>
                <p>
                    
                    <meta name="description" content="Tips for staying on track"/>
                    
                    <>
                        Do you know where you are spending your money? If you really stop to track it down,
                        you would get surprised! Proper budget management depends on real data... and this
                        app will help you with that!
                    </>
                </p>
            </article>
    
            <article>
                <h1>Alerts</h1>
                <p>
                    
                    <span>
                        What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                    </span>
                </p>
            </article>
    
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article>
                
                <header>
                    <h1> Free </h1>
                </header>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </article>
    
            <article>
                
                <header>
                    <h2> Stay on track </h2>
                </header>
                
                <h3>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </h3>
            </article>
    
            <article>
                <h1>Alerts</h1>
                <p>
                     
                    <i>
                        What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                    </i>
                </p>
            </article>
    
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article>
                <h1>Chart</h1>
                <p>
                    <canvas id="myChart" width="400" height="400"></canvas>
                </p>
            </article>
            
            <div>
                <h1>D3.js</h1>
                {/* <svg width="960px", height="650px" style="margin: 5px;"></svg> */}
            </div>

        </div>

    </main>
  )
}

export default HomePage