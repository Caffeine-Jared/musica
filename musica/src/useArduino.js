import { useState, useEffect } from "react";
import { Board, Led } from "johnny-five";

const useArduino = () => {
  const [board, setBoard] = useState(null);
  const [leds, setLeds] = useState([]);

  useEffect(() => {
    const newBoard = new Board();

    newBoard.on("ready", () => {
      const newLeds = [
        new Led({ pin: 2, board: newBoard }),
        new Led({ pin: 3, board: newBoard }),
        new Led({ pin: 4, board: newBoard })
      ];

      setBoard(newBoard);
      setLeds(newLeds);
    });

    return () => {
      if (board) {
        board.reset();
      }
    };
  }, []);

  const handlePlay = () => {
    if (board) {
      leds.forEach((led, index) => {
        setTimeout(() => {
          led.on();
        }, index * 500);
        setTimeout(() => {
          led.off();
        }, (index + 1) * 500);
      });
    }
  };

  return { handlePlay };
};

export default useArduino;
