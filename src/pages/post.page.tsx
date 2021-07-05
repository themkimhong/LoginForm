import React, { Fragment, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
	postsService,
	PostInterface,
	deletePostService,
	creatPostService,
	updatePostService,
} from "../services/post.service";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from "@material-ui/core";
import { Formik } from "formik";
import { CustomeTextField } from "../components/CTextField/custome-textfield";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});
export function PostPage() {
	const [data, setData] = useState<Array<PostInterface> | undefined>();
	const [openModal, setOpenModdal] = useState<boolean>(false);
	const [edittable, setEditTable] = useState<undefined | PostInterface>();
	const fetchData = () => {
		postsService().then((res) => {
			//@ts-ignore
			setData(res.data.data);
		});
	};
	useEffect(() => {
		fetchData();
	}, []);

	console.log("data", data);
	const classes = useStyles();
	const ModalFormCreat = (
		<div>
			{/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Open form dialog
			</Button> */}
			<Dialog
				open={openModal}
				//onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">CreatPost</DialogTitle>
				<DialogContent>
					<Formik
						initialValues={
							edittable == undefined
								? { title: "", description: "", content: "" }
								: edittable
						}
						onSubmit={(values, { setSubmitting }) => {
							console.log("Submit value", values);
							if (edittable == undefined) {
								creatPostService(values).then((res) => {
									fetchData();
									setOpenModdal(false);
								});
							} else {
								updatePostService(edittable.id, edittable).then((res) => {
									fetchData();
									setOpenModdal(false);
								});
							}

							//.catch((err) => alert("Error", err));
						}}
					>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
							isSubmitting,
							/* and other goodies */
						}) => (
							<form onSubmit={handleSubmit}>
								<CustomeTextField
									placeholder="Title"
									type="title"
									name="title"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.title}
									variant="filled"
								/>
								<CustomeTextField
									placeholder="Description"
									type="description"
									name="description"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.description}
									variant="filled"
								/>
								<CustomeTextField
									placeholder="Content"
									type="content"
									name="content"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.content}
									variant="filled"
								/>

								<DialogActions>
									<Button
										onClick={() => {
											setOpenModdal(false);
											setEditTable(undefined);
										}}
										color="primary"
									>
										Cancel
									</Button>
									<Button type="submit" color="primary">
										Creat
									</Button>
								</DialogActions>
							</form>
						)}
					</Formik>
				</DialogContent>
			</Dialog>
		</div>
	);

	return (
		<>
			{ModalFormCreat}
			<Button
				onClick={() => setOpenModdal(true)}
				style={{ marginBottom: 20, color: "lightskyblue" }}
			>
				Creat
			</Button>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Title</TableCell>
							<TableCell align="left">Content</TableCell>
							<TableCell align="left">Auth-ID</TableCell>
							<TableCell align="left">Description</TableCell>
							<TableCell align="left">Creat_At</TableCell>
							<TableCell align="left">Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data?.map((data, index) => (
							<TableRow key={index}>
								<TableCell component="th" scope="row">
									{data.title}
								</TableCell>
								<TableCell align="left">{data.content}</TableCell>
								<TableCell align="left">{data.author_id}</TableCell>
								<TableCell align="left">{data.description}</TableCell>
								<TableCell align="left">{data.created_at}</TableCell>
								<TableCell align="left">
									<Button
										style={{ color: "red" }}
										onClick={() => {
											console.log(data);
											deletePostService(data.id).then((res) => {
												// alert("Delete Succeessful" + data.id);
												fetchData();
											});
										}}
									>
										Delete
									</Button>
									<Button
										style={{ color: "lightseagreen" }}
										onClick={() => {
											setEditTable(data);
											setOpenModdal(true);
										}}
									>
										Update
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
