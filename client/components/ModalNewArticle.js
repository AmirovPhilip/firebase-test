import React from 'react';
import {Modal, Button, Input, Icon} from 'react-materialize'

export default class ModalNewArticle extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            imageurl: '',
            text: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    handleChange(e) {
        switch (e.target.name){
            case 'title':
                if(e.target.value){
                    $('input[name=title]').removeClass('require');
                }
                this.setState({title: e.target.value});
                break;
            case 'description':
                if(e.target.value){
                    $('input[name=description]').removeClass('require');
                }
                this.setState({description: e.target.value});
                break;
            case 'imageurl':
                if(e.target.value){
                    $('input[name=imageurl]').removeClass('require');
                }
                this.setState({imageurl: e.target.value});
                break;
            case 'article-text':
                if(e.target.value){
                    $('#article-text').removeClass('require');
                }
                this.setState({text: e.target.value});
                break;
            default: return;
        }
    }

    handleSubmit(e) {
        let valid = true;
        if(!this.state.title){
            $('input[name=title]').addClass('require');
            valid = false;
        }
        if(!this.state.description){
            $('input[name=description]').addClass('require');
            valid = false;
        }
        if(!this.state.imageurl){
            $('input[name=imageurl]').addClass('require');
            valid = false;
        }
        if(!this.state.text){
            $('#article-text').addClass('require');
            valid = false;
        }
        if(valid){
            this.props.addArticle(this.state);
            $('.modal').modal('close');
            this.clearForm();
        }
    }

    clearForm() {
        this.setState({
            title: '',
            description: '',
            imageurl: '',
            text: ''
        });
    }

    render() {
        return (
            <div>
                <Modal
                    header='Add new article'
                    actions={
                        <div>
                            <Button waves='light' className="default modal-close" onClick={this.clearForm}>cancel</Button>
                            <Button waves='light' className="submit" onClick={this.handleSubmit}>Submit</Button>
                        </div>
                    }
                    trigger={
                        <Button waves='light'>new acticle<Icon left>playlist_add</Icon></Button>
                    }>
                    <div>
                        <Input s={12}
                               label="Title"
                               name="title"
                               value={this.state.title}
                               onChange={this.handleChange}
                        />
                        <Input s={12}
                               label="Description"
                               name="description"
                               value={this.state.description}
                               onChange={this.handleChange}
                        />
                        <Input s={12}
                               label="Image URL"
                               name="imageurl"
                               value={this.state.imageurl}
                               onChange={this.handleChange}
                        />
                        <textarea name="article-text"
                                  className="article-text"
                                  id="article-text"
                                  placeholder="Article text"
                                  value={this.state.text}
                                  onChange={this.handleChange}
                        />
                    </div>
                </Modal>
            </div>);
    }
}
