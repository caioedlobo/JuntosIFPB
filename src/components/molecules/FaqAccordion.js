import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const FaqAccordion = (props) => {
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h6'>{props.children[0]}</Typography>
        
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {props.children[1]}
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default FaqAccordion