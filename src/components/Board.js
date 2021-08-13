import React, { useState, useEffect } from 'react'
import createBoard from "../util/createBoard";
import Cell from "./Cell";

export default function Board() {
    const [grid, setGrid] = useState([]);

    useEffect(()=>{
      function freshBoard(){
        const newBoard = createBoard(5, 5, 10);
        console.log(newBoard)
        setGrid(newBoard);
      }
      freshBoard();
    }, [])
  

    if(!grid.board){
        return <div>Loading</div>;
        }
        return grid.board.map((singleRow) => {
            return (
                <div style={{ display: "flex"}}>
                    {singleRow.map((singleBlock) => {
                        return <Cell details={singleBlock}/>
                    })}
                </div>
            );
           
            });
        
}
