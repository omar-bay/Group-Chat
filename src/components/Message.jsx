import './Message.css'
import React, { forwardRef, useState } from 'react'
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';

// forwardRef is an animation library

const Message = forwardRef((props, ref) => {
    const isUser = props.username === props.message.username;
    const callme = () => isUser?props.username:"Unknown";
    return (
        <div ref={ref} className={`message ${isUser && `message_user`}`}>
            <Card className={isUser?"message_userCard":"message_guestCard"}>
            <CardContent>
                <Typography
                    color="white"
                    variant="h6"
                    component="h4"
                >
                    {props.message.username==''?"X":props.message.username}: {props.message.text}
                </Typography>
            </CardContent>
        </Card>
        </div>
    )
})

export default Message;
