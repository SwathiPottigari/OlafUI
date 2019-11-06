import React, { Component } from 'react';
import './ErrorModal.css';

function ErrorModal(props) {
    return (
        <div>
            <div className="modal fade" id="errorModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Oops! Please Try Again</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="message-body modal-body mx-3">
                            <p>{props.message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorModal;