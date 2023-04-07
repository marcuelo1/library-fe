import React from 'react';
import { useContext } from 'react';

import ActionButton2 from '../../../core/components/buttons/actionButton2';
import Modal from '../../../core/components/modals/modal';
import "../stylesheets/addSaleModal.scss";
import { SalesContext } from '../contexts/salesContext';
import SearchedSizeCard from '../../../core/utils/searchedSizeCard';
import AddedSaleSizeCard from './addedSaleSizeCard';

const AddSaleModal = () => {
  const context = useContext( SalesContext );
  const { searchedSizes, searchSizes, addSaleSize, addedSaleSizes, removeAddedSaleSize, onChangeSaleSizeQty, onChangeSaleType, customers, createSale } = context;

  const addSaleBtnConfig = {
    name: "Add", 
    infoContent: "Submit Form",
    infoContentPosition: "left",
    className: "submit-sale",
    onClick: createSale,
    theme: "light"
  };

  return (
    <Modal title="New Sale" id="add-sale-modal" isHide={true}>
      <div className="add-sale-modal">
        <div className="container">
          <div className="search-container">
            <div className="search-bar">
              <input type="text" name='search' placeholder='Search here...' autoComplete='off' onKeyUp={searchSizes} />
            </div>
            {searchedSizes.length === 0 ? "" :
              <div className="searched-sizes">
                {searchedSizes.map(size =>
                  <SearchedSizeCard key={size.id} size={size} onClick={addSaleSize} />
                )}
              </div>
            }
          </div>
          <div className="products-container">
            {addedSaleSizes.map(size => 
              <AddedSaleSizeCard key={size.id} size={size} removeAddedSaleSize={removeAddedSaleSize} onChangeSaleSizeQty={onChangeSaleSizeQty} />
            )}
          </div>
        </div>
        <div className="container">
          <div className="group">
            <div className="label">Total</div>
            <div className="value" id='add-sale-modal-total-price'>₱0.00</div>
          </div>
          <div className="group">
            <div className="label">Type</div>
            <select name="sale_type" id="" onChange={onChangeSaleType}>
              <option value="completed">Complete</option>
              <option value="pending">Pending</option>
              <option value="debt">Debt</option>
            </select>
          </div>
          <div className="group hide">
            <div className="label">Customer</div>
            <select name="customer" id="">
              {customers.map(customer => 
                <option key={customer.id} value={customer.id}>{customer.name}</option>
              )}
            </select>
          </div>
          <ActionButton2 config={addSaleBtnConfig} />
        </div>
      </div>
    </Modal>
  )
}

export default AddSaleModal;