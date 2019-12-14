function getIndex(req, res) {
    res.render('index', {title: 'CV'})
}

function getTest(req, res) {
    res.render('about-cv')
}

function getProjects(req,res){
    res.render('app-info')
}

module.exports = {
    getIndex,
    getTest,
    getProjects
};