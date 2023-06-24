import css from "./Main.module.css"


function Main({users}) {

    console.log(users);


    return (
        <div className={css.mainBlock}> 
            <div className={css.centerBlock}>
                <div className={css.blockLeft}>
                    <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg" />
                    <h1>{users.userName}</h1>
                    <h2>{users.firstName}</h2>

                    <h4>Email : {users.email1}</h4>
                    <h4>phone : 0356931185555</h4>
                  
                    
                    </div>
                <div className={css.blockRight}>
                    <p>List your jobs in reverse-chronological order. Start with your current or most 
                        recent position, then follow it with the one before it, and so on.
                    </p>    
                    <h5>Work Experience/Job Description</h5>
                    <p>[Your Job Title]</p>
                    <p>[Company Name]</p>
                    <p>[2012–2019]</p>
                </div>   
            </div>     
           
        </div>
    )
}

export default Main