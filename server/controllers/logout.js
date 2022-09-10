const logout = (req,res)=>{
    res.clearCookie('user').redirect('/');
}

module.exports = logout;