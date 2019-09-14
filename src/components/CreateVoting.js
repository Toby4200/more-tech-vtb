import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';

export default class CreateVoting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: 'Создание голосования',
      title: '',
      description: '',
      points: [
        {
          title: 'Пункт 1',
          links: []
        },
        {
          title: 'Пункт 2',
          links: []
        }
      ]
    };
  }

  renderPointField = (index) => {
    const { points } = this.state;
    const { title } = points[index];

    const handleTitleChange = ({target: {value: title}}) => {
      points[index].title = title;
      this.setState({ points });
    };

    return (
      <ListItem key={`point-${index}`}>
        <TextField
          value={title}
          placeholder="Введите название"
          onChange={handleTitleChange}
          fullWidth
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  };

  renderTitle = () => {
    const { pageTitle } = this.state;

    return (
      <div style={{ padding: '15px' }}>
        <Typography color="textSecondary" variant="h5">{pageTitle}</Typography>
      </div>
    );
  };

  renderTitleField = () => {
    const { title } = this.state;
    const handleChange = ({target: {value: title}}) => {
      this.setState({ title });
    };

    return (
      <div>
        <TextField
          label="Заголовок"
          value={title}
          fullWidth
          margin="normal"
          variant="outlined"
          onChange={handleChange}
        />
      </div>
    );
  };

  renderDescriptionField = () => {
    const { description } = this.state;
    const handleChange = ({target: {value: description}}) => {
      this.setState({ description });
    };

    return (
      <div>
        <TextField
          label="Описание"
          value={description}
          multiline
          rows="8"
          fullWidth
          margin="normal"
          variant="outlined"
          onChange={handleChange}
        />
      </div>
    );
  };

  renderPoints = () => {
    const { points } = this.state;

    return (
      <div style={{ marginTop: '15px' }}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Добавить пункты голосования
            </Typography>
            <List dense>
              {points.map((_, i) => this.renderPointField(i))}
            </List>
          </CardContent>
        </Card>
      </div>
    );
  };

  render() {
    return (
      <Container maxWidth="sm">

        {this.renderTitle()}
        {this.renderTitleField()}
        {this.renderDescriptionField()}
        {this.renderPoints()}

      </Container>
    );
  }
}