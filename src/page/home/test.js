import React , {Component} from 'react';
import { connect } from "react-redux";
import { addTodo } from "../../store/actions/test";
import { selectBook , anotherSelect } from "../../actions/index";
import { bindActionCreators } from "redux";
class Test extends React.Component{
    constructor(props){
        super(props)
    }
    testHandler = () => {
        let postData = { title: "C语言", pages: 55 }
        console.log(this)
        let newBoosArr = this.props.books.push(postData)
        this.props.selectBook(newBoosArr)

        this.forceUpdate()
    }
    render(){
        return (
            <div>
                {this.props.books.map(book => {
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
    console.log(state)
    return {
        books: state.books
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