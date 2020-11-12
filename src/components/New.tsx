import React from 'react';
//import clsx from 'clsx'
import { HeadCell } from '../interfaces/HeadCell.interface';
import { createStyles,/*lighten,*/ makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import { CustomTableProps } from '../interfaces/CustomTableProps.interface';
import clsx from 'clsx';
//import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
//import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
//import Checkbox from '@material-ui/core/Checkbox';
//import IconButton from '@material-ui/core/IconButton';
//import Tooltip from '@material-ui/core/Tooltip';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Switch from '@material-ui/core/Switch';
//import DeleteIcon from '@material-ui/icons/Delete';
//import FilterListIcon from '@material-ui/icons/FilterList';




/*function Exmaple() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const [studentId, setId] = useState("dasd");
    let win;
    if (count > 5) {
        win = <p>win!!!!!!!!!!</p>;
    }
    else {
        win = <p></p>
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <label>enter id</label>
            <input onChange={e => setId(e.target.value)} defaultValue={studentId} />
            <p>{studentId}</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
      </button>
            {win}

        </div>
    );
} export default Exmaple;
*/



