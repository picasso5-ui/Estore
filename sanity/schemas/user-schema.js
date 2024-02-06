const user  = {
    name:'user',
    title:'User',
    type:'document',
    fields:[
        {
            name:'username',
            title:'Username',
            type:'string',
            validation:Rule => Rule.required()
        },
        
        {
            name:'email',
            title:'Email',
            type:'string',
            validation:Rule => Rule.required().unique()

        },
        {
            name:'createdAt',
            title:'CreatedAt',
            type:'datetime',
            options:{
                 dateFormat:"YYYY-MM-DDTHH:mm:ss2" 
                },
           readOnly:true,
        },
        

    ],
}


export default user;