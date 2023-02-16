import styles from "./card.module.css"
import * as React from 'react';

import { CardActions, Collapse } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




export default function Card(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


 
    return(
            <div className={styles.card}>
              <CardActions disableSpacing>
                
              </CardActions>
              <h3>{props.name}</h3> 
              <h2> {props.contact}</h2>
              <span expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more">Ver avaliação</span>
              <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
               <ExpandMoreIcon justify-contente="right" /> 
                </ExpandMore>
              
              <Collapse in={expanded} timeout="auto" unmountOnExit>
              <h2 wrap="hard"> {props.abstract}</h2>  
              </Collapse>
            </div>
    )
  }
  