import { Card, Grid } from "semantic-ui-react";
import React from "react";

const CompanyIndexCard = ({ company }) => {
  return (
    <Card centered fluid>
      <Card.Content>
        <Card.Header>
          <Grid columns={2} divided>
            <Grid.Column>{company.name}</Grid.Column>
            <Grid.Column>{`${company.city}, ${company.state}`}</Grid.Column>
          </Grid>
        </Card.Header>
      </Card.Content>
      <Card.Content>{company.description}</Card.Content>
    </Card>
  );
};

export default CompanyIndexCard;
