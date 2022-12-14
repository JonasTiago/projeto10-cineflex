import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Sessions({ date }) {
    return (
        <TimeStyle>
            <h4 data-identifier="session-date">{date.weekday} - {date.date}</h4>
            <div>
                {date.showtimes.map(time =>
                    <Link key={time.id} to={`/assentos/${time.id}`}>
                        <button data-identifier="hour-minute-btn" >{time.name}</button>
                    </Link>
                )}
            </div>
        </TimeStyle>
    );
};

const TimeStyle = styled.div`
    display:flex;
    flex-direction:column;

    h4{
        color:#293845;
        font-size:20px;
        margin-bottom:23px;
    }

    div{
        display:flex;
        margin-bottom:23px;

        button{
            background-color:#E8833A;
            color:#fff;
            width:82px;
            height:43px;
            font-size:18px;
            margin-right:8px;
            border:none;
            border-radius:3px;
        }
    }

`;