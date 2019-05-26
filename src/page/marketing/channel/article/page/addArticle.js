import React , {Component} from 'react'
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import './common.scss'
import omit from 'lodash/omit';
import { Form, Icon, Pop , Radio , Upload , Button , Notify } from 'zent';
import {requestGetArticleTags} from '@/service/article/article'
const { Field, FormInputField, createForm , FormRadioGroupField , getControlGroup, unknownProps } = Form;

class UploadWrap extends React.Component {
    wrappedOnChange = (imgs) => {
        console.log(imgs)
        this.props.onChange(imgs);
    };

    render() {
        const passableProps = omit(this.props, unknownProps);
        const { value } = this.props;

        return (
            <div>
                <Upload {...passableProps} onUpload={this.wrappedOnChange} localOnly maxSize={1024 * 1024 * 1024} />
                {
                    value && value.map((item, index) => {
                        return (
                            <img
                                width="80"
                                height="80"
                                key={index}
                                src={item.src}
                                style={{marginLeft: '10px'}}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

const UploadField = getControlGroup(UploadWrap);

class AddArticle extends React.Component{
    constructor(pros){
        super(pros)
        this.state = {
            tags: [],
            // 创建一个空的editorState作为初始值
            editorState: BraftEditor.createEditorState(null)
        }
    }

    submit = (values, zentForm) => {
        Notify.success(JSON.stringify(values));
    };

    resetForm = () => {
        this.props.zentForm.resetFieldsValue();
    }

    updateLocalImage = (data) => {
        return new Promise(resolve => {
            resolve(data);
        })
    }

    handleEditorChange = (editorState) => {
        this.setState({ editorState })
    }

    submitContent = async () => {
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
        const htmlContent = this.state.editorState.toHTML()
    }

    addArticleHandler = () => {
        console.log(this.state.editorState.toHTML())
    }

    async componentDidMount() {
        requestGetArticleTags().then((res) => {
            this.setState({
                tags: res
            })
        })

        // 假设此处从服务端获取html格式的编辑器内容
        // const htmlContent = await fetchEditorContent()
        // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
        this.setState({
            editorState: BraftEditor.createEditorState('')
        })
    }

    render(){
        const { handleSubmit } = this.props
        const { editorState } = this.state
        return (
            <div>
                <Form horizontal onSubmit={handleSubmit(this.submit)}>
                    <FormInputField
                        name="name"
                        type="text"
                        label={
                            <span>
                              文章标题&nbsp;
                              <Pop trigger="hover" content="用户名用于个人账号登录" centerArrow>
                                <Icon type="error-circle-o" />
                              </Pop>:
                            </span>
                        }
                        helpDesc="用户名为5-25个字符"
                        required
                    />

                    <FormRadioGroupField
                        name="sex"
                        label="类别:"
                        required
                        validations={{
                            required(values, value) {
                                return value !== '';
                            },
                        }}
                        validationErrors={{
                            required: '请选择性别',
                        }}
                    >
                        {
                            this.state.tags.map((v , k) => {
                                return (
                                    <Radio key={k} value={v.category_id} >{v.name}</Radio>
                                )
                            })
                        }
                    </FormRadioGroupField>

                    <Field
                        name="imgs"
                        label="封面图:"
                        component={UploadField}
                        value={[]}
                        maxSize={8 * 1000 * 1000}
                        triggerInline
                        tips="建议尺寸：640 x 640 像素；"
                        onUpload={this.updateLocalImage}
                    />
                    <div className="zent-form__form-actions">
                        <Button type="primary" outline onClick={this.resetForm}>重置</Button>
                    </div>

                    <div class="input-content">
                        <div class="label">
                            文章内容
                        </div>
                        <div class="input">
                            <BraftEditor
                                value={editorState}
                                onChange={this.handleEditorChange}
                                onSave={this.submitContent}
                            />
                        </div>
                    </div>

                </Form>

                <div style={{padding: '0 130px'}}>
                    <Button onClick={() => this.addArticleHandler()}>提交</Button>
                </div>
            </div>
        )
    }
}
const AddArticleForm = createForm()(AddArticle);

export default AddArticleForm
