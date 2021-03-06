import React, { Component } from "react";

class HistorySample extends Component {
  handleGoBack = () => {
    this.props.history.goBack();
  };
  handleGoHome = () => {
    this.props.history.push("/");
  };

  componentDidMount() {
    // 페이지에 변화가 생기려고 할 때마다 물어봄
    this.unblock = this.props.history.block("정말 떠나시나요");
  }

  componentWillUnmount() {
    //언마운트되면 질문그만함
    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

export default HistorySample;
