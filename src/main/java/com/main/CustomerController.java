
package com.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Product controller.
 */
@Controller
public class CustomerController {

    private CustomerService customerService;
    
    @RequestMapping("/test")
    @ResponseBody
    String home() {
        return "Hello World!";
    }

    @Autowired
    public void setcustomerService(CustomerService customerService) {
        this.customerService = customerService;
    }

    /**
     * List all Customer.
     *
     * @param model
     * @return
     */
    @RequestMapping("/customersList")  @ResponseBody
    public Iterable<Customer>  list(Model model) {
        return customerService.listAllCustomers();
       
    }
    
    

    /**
     * View a specific Customer by its id.
     *
     * @param id
     * @param model
     * @return
     */
    @RequestMapping("customer/{id}") @ResponseBody
    public String showProduct(@PathVariable Integer id, Model model) {
        model.addAttribute("customer", customerService.getCustomerById(id));
        return "";
    }

    // Afficher le formulaire de modification du Product
    @RequestMapping("customer/edit/{id}")
    public String edit(@PathVariable Integer id, Model model) {
        model.addAttribute("customer", customerService.getCustomerById(id));
        return "";
    }

    /**
     * New Customer.
     *
     * @param model
     * @return
     */
    @RequestMapping("customer/new")
    public String newCustomer(Model model) {
        model.addAttribute("product", new Product());
        return "productform";
    }

    /**
     * Save Customer to database.
     *
     * @param Customer
     * @return
     */
    @RequestMapping(value = "customer", method = RequestMethod.POST)
    public String saveCustomer(Customer customer) {
    	customerService.saveCustomer(customer);
        return "redirect:/product/" + customer.getId();
    }

    /**
     * Delete Customer by its id.
     *
     * @param id
     * @return
     */
    @RequestMapping("customer/delete/{id}")
    public String delete(@PathVariable Integer id) {
    	customerService.deleteCustomer(id);
        return "redirect:/products";
    }

}
