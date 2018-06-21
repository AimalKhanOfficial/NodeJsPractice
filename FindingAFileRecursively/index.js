
function find(name, treeObject){
    var flag = false;
    treeObject.files.forEach(element => {
        if(!flag){
            if(element == name){
                console.log("Element found in:", treeObject.name);
                flag = true;
            }
        }
    });

    if(!flag){
        treeObject.subfolders.forEach(element => {
            find(name, element);
        });
    }
}

const tree = {
    name : "home", 
    files : ["notes.txt", "todo.txt"], 
    subfolders : [
        {
            name : "payroll", 
            files : ["paper.pdf", "funds.csv"], 
            subfolders : []
        }, 
        {
            name : "misc", 
            files : ["summer1.jpg", "summer2.jpg", "summer3.jpg"], 
            subfolders : [
                {
                    name : "logs", 
                    files : ["logs1", "logs2", "logs3", "logs4"], 
                    subfolders : []
                }
            ]
        }    
    ]
}

find("logs1", tree);

