import styled from "styled-components";

export default function Seat({ seatId, seatNum, isAvailable, reservar, disabled }) {

    return (
        <>
            {isAvailable === undefined ?
                <Selected onClick={() => reservar(seatId, seatNum)} disabled={disabled} data-identifier="seat">{seatNum}</Selected> :
                (isAvailable ?
                    <Available onClick={() => reservar(seatId, seatNum)} disabled={disabled} data-identifier="seat">{seatNum}</Available> :
                    <Unavailable onClick={() => alert(`Assento ${seatNum} está ocupado`)} disabled={disabled} data-identifier="seat">{seatNum}</Unavailable>)}
        </>
    );
};

const SeatStyle = styled.button`
    border-radius:12px;
    width:26px;
    height:26px;
    font-size:11px;
    margin:8px 3px;
    
`;

const Available = styled(SeatStyle)`
    background-color:#C3CFD9;
    border:1px solid #7B8B99;
`;
const Selected = styled(SeatStyle)`
    background-color:#1AAE9E;
    border:1px solid #0E7D71;
`;
const Unavailable = styled(SeatStyle)`
    background-color:#FBE192;
    border:1px solid #F7C52B;
`;