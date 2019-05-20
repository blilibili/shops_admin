import React , {Component} from 'react';
import { connect } from "react-redux";
import { addTodo } from "../../store/actions/test";
import { selectBook , anotherSelect } from "../../actions/index";
import { bindActionCreators } from "redux";
class Test extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            booksArr: this.props.books
        }
    }

    testHandler = () => {
        console.log(this.props)
        let postData = { title: "C语言", pages: 55 }
        this.props.selectBook(postData)


        this.setState({
            booksArr: this.props.activedBooks
        })
    }
    render(){
        return (
            <div>
                {this.state.booksArr.map(book => {
                    return (
                        <div>{book.title}</div>
                    )
                })}
                <button onClick={() => this.testHandler()}>新增一本书</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        books: state.books,
        activedBooks: state.activeBook
    };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result shoudl be passed
    // to all of our reducers
    return bindActionCreators({ selectBook: selectBook , anotherSelect: anotherSelect }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
