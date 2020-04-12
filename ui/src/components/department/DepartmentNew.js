<form className={classes.root} noValidate autoComplete="off">
  <Grid container spacing={3}>
    <Grid item xs={1}></Grid>
    <Grid item xs={6}>
      <TextField
        fullWidth
        id="standard-secondary"
        label="Department Name"
        color="primary"
      />
    </Grid>

    <Grid item xs={3}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
    </Grid>
  </Grid>
</form>;
