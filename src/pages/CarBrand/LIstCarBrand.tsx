
import React, { useState, useMemo } from 'react';
import ReactTable from 'ReusableComponents/ReactTable';
import Chip from '@mui/material/Chip';
import { Menu, MenuItem, IconButton, Select, FormControl, InputLabel, Grid, TextField } from '@mui/material';
import CommonEdit from 'pages/common-dilogs/comon-edit';
import CommonConfirmationDialog from 'pages/common-dilogs/confirm';
import CommonSnackbar from 'pages/common-dilogs/Snackbar';
import img from '../../assets/images/home.png';
import img1 from '../../assets/images/profile/profile-back-1.png';
import { Button } from '@mui/material';

export default function LIstCarType() {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editData, setEditData] = useState<any>(null);
  const [open, setOpen] = useState({ flag: false, action: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error' | 'info' | 'warning'>('success');
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [confirmDialogTitle, setConfirmDialogTitle] = useState(''); // State for dialog title
  const [deleteData, setDeleteData] = useState<any>(null); // For storing the row to delete
  const [data, setData] = useState([
    { image: img, status: 'Active',title: "BMW" },
    { image: img1, status: 'Block',title: "BMW" },
    { image: img, status: 'Active' ,title: "BMW"},
    { image: img1, status: 'Block',title: "BMW" },
    { image: img, status: 'Active',title: "BMW" },
    { image: img1, status: 'Block' ,title: "BMW"},
    {
      image: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      status: 'Block',title: "BMW"
    }
  ]);

  const handleEdit = (row: any) => {
    setEditData(row);
    setEditDialogOpen(true);
  };

  const handleUpdate = () => {
    setConfirmDialogTitle('Confirm Update'); // Set title for the confirmation dialog
    setConfirmDialogOpen(true);
    setEditDialogOpen(false);
  };

  const handleCancel = () => {
    setEditDialogOpen(false);
  };

  const handleFieldChange = (field: any, value: any) => {
    setEditData((prev: any) => ({ ...prev, [field]: value }));
  };

  // Handle row delete
  const handleDelete = (row: any) => {
    setDeleteData(row); // Store row to delete
    setConfirmDialogTitle('Confirm Delete'); // Set title for the confirmation dialog
    setConfirmDialogOpen(true); // Open delete confirmation dialog
  };

  // Confirm delete action
  const handleConfirmDelete = () => {
    if (deleteData && deleteData.image) {
      setData((prevData: any) => prevData.filter((item: any) => item.image !== deleteData.image));
      setConfirmDialogOpen(false);
      setSnackbarMessage('Deleted successfully!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } else {
      setConfirmDialogOpen(false);
      setSnackbarMessage('Error: Invalid data for deletion!');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleCancelDelete = () => {
    setConfirmDialogOpen(false);
    setEditDialogOpen(true);
  };

  // Confirm update action
  const handleConfirmUpdate = () => {
    setData((prevData: any[]) =>
      prevData.map((item: any) =>
        item.image === editData.image
          ? { ...item, title: editData.title, status: editData.status }
          : item
      )
    );
  
    setConfirmDialogOpen(false);
    setSnackbarMessage('Update Successful!');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
  };

  const columns = useMemo(
    () => [
      {
        header: 'SNo',
        accessorKey: 'sno',
        cell: (props: any) => props.row.index + 1,
        enableSorting: false
      },
      {
        header: 'Car Title',
        accessorKey: 'title',
        // cell: (props: any) => <img src={props.getValue()} alt="Banner" style={{ width: '100px', height: '100px', borderRadius: '5px' }} />
      },
      {
        header: 'Banner Image',
        accessorKey: 'image',
        cell: (props: any) => <img src={props.getValue()} alt="Banner" style={{ width: '100px', height: '100px', borderRadius: '5px' }} />
      },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: (props) => {
          const status = props.getValue();
          return status === 'Block' ? (
            <Chip color="error" label="Block" size="small" variant="light" />
          ) : (
            <Chip color="success" label="Active" size="small" variant="light" />
          );
        }
      }
    ],
    []
  );

  const ActionMenu: React.FC<{ row: any }> = ({ row }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <IconButton onClick={handleClick}>...</IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem
            onClick={() => {
              handleEdit(row);
              handleClose();
            }}
          >
            Edit
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleDelete(row);
              handleClose();
            }}
          >
            Delete
          </MenuItem>
        </Menu>
      </>
    );
  };

  return (
    <>
      <ReactTable
        title={'Banner List'}
        data={data}
        columns={columns}
        actions={(row: any) => <ActionMenu row={row} />}
        includeSearch={true}
        needCSV={true}
        pagination={'top'}
        columnVisibility={true}
        needCheckBoxes={true}
        needActivateAndSuspendButtons={true}
        open={open}
        setOpen={setOpen}
        setRowsPerPage={() => {}}
        setPageNumber={() => {}}
        pageNumber={1}
        totalPageCount={60}
      />

      <CommonEdit
        open={editDialogOpen}
        onClose={handleCancel}
        title="Edit Banner"
        onSave={handleUpdate}
        content={
          editData && (
            <>
              <Grid container>
                <img
                  src={editData.image}
                  alt="Selected"
                  style={{
                    width: '100%',
                    height: '180px',
                    borderRadius: '5px',
                    marginBottom: '20px',
                    margin: 'auto'
                  }}
                />
              </Grid>
              <FormControl fullWidth margin="normal">
                <input
                  style={{ display: 'none' }}
                  id="upload-file"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        if (event.target?.result) {
                          handleFieldChange('image', event.target.result);
                        }
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                <label htmlFor="upload-file">
                  <Button variant="contained" component="span" color="primary" fullWidth>
                    Edit Image
                  </Button>
                </label>
              </FormControl>
                  <FormControl fullWidth margin="normal">
                  <TextField
                  label="City Title"
                  value={editData.title}
                  onChange={(e) => handleFieldChange('title', e.target.value)} 
                  fullWidth
                  margin="normal"
                />
                  </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel>Status</InputLabel>
                <Select value={editData.status} onChange={(e) => handleFieldChange('status', e.target.value)} label="Status">
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Block">Block</MenuItem>
                </Select>
              </FormControl>
            </>
          )
        }
      />

      <CommonConfirmationDialog
        open={confirmDialogOpen}
        onClose={handleCancelDelete}
        onConfirm={() => {
          if (confirmDialogTitle === 'Confirm Delete') {
            handleConfirmDelete();
          } else if (confirmDialogTitle === 'Confirm Update') {
            handleConfirmUpdate();
          }
        }}
        title={confirmDialogTitle}
        message={
          confirmDialogTitle === 'Confirm Delete'
            ? 'Are you sure you want to delete this row?'
            : 'Are you sure you want to update this row?'
        }
      />

      <CommonSnackbar open={snackbarOpen} message={snackbarMessage} onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity} />
    </>
  );
}
