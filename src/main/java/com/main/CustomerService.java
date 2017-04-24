package com.main;

public interface CustomerService {

    Iterable<Customer> listAllCustomers();

    Customer getCustomerById(Integer id);

    Customer saveCustomer(Customer employee);

    void deleteCustomer(Integer id);

}
