import React from 'react'

export const Footer = () => {

    let footerStyle = {
    position: "relative",
    top: "150vh",
    width: "100%"
    }
    return (
        <footer className='bg-dark text-light py-3' style={footerStyle}>
        <p className='text-cennter'>
        Copyright &copy; MyTodosList.com
        </p>
        
        </footer>
    )
}