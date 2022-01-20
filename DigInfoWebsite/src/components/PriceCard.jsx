import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-right: 50px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 10px;
    padding: 10px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
  @media only screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

const Type = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: 1.5px solid crimson;
  color: crimson;
  background-color: white;
  border-radius: 20px;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin: 30px 0;
  @media only screen and (max-width: 480px) {
    margin: 10px;
    font-size: 12px;
  }
`;

const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    padding: 5px;
  }
`;

const PriceCard = ({ price, type }) => {
  return (
    <>
      <Container>
        <PriceContainer>
          School Management System
        </PriceContainer>
        <Type>Discounted Plan</Type>
        <List>
          <ListItem>
            It is used in storing school information in a central database processing of student reports and
            performance and handles student ledgers and reconciliations of the school with the bank.
          </ListItem>

        </List>
        <Button>Contact Us Now</Button>
      </Container>

      <Container>
        <PriceContainer>
          Sacco Management System
        </PriceContainer>
        <Type>Discounted Plan</Type>
        <List>
          <ListItem>
            This tool can be used by sacco and upcoming micro finance in our regions, it includes modules like client management, employee management,
            loans management, savings and withdraws management and assets management.
          </ListItem>

        </List>
        <Button>Contact Us Now</Button>
      </Container>

      <Container>
        <PriceContainer>
          Hospital Management System
        </PriceContainer>
        <Type>Discounted Plan</Type>
        <List>
          <ListItem>
            This software helps with the management of a hospital, including all medication records, finance records,
            patient records and other activities that happen in a hospital.
          </ListItem>

        </List>
        <Button>Contact Us Now</Button>
      </Container>
    </>
  );
};

export default PriceCard;
