import {Box, Typography} from '@mui/material'
import styled from "styled-components";

export const Container = styled(Box)`
    width: 100%;
    max-width: 800px;
    height: 100%;

    background: ${({theme}) => theme.general[300]};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 580px) {
        height: auto;
        padding: 24px 0;

        > img {
            width: 85px;
            height: 85px;
        }
    }
`;

export const Title = styled(Typography)`
    color: ${({theme}) => theme.general[100]};
    font-size: ${({theme}) => theme.typography.h2.fontSize};
    font-weight: ${({theme}) => theme.typography.h4.fontWeight};
    margin-top: 18px;

    @media (max-width: 580px) {
      font-size: 14px;
    }
`;



