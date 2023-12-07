package com.example.projectflow.services;

import com.example.projectflow.models.Company;
import com.example.projectflow.repositories.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyService {
    @Autowired
    private CompanyRepository companyRepository;

    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    public Optional<Company> getCompanyById(Long id) {
        return companyRepository.findById(id);
    }

    public Company createCompany(Company company) {
        return companyRepository.save(company);
    }

    public Company updateCompany(Long id, Company companyDetails) {
        Optional<Company> companyOptional = companyRepository.findById(id);

        if (companyOptional.isPresent()) {
            Company existingCompany = companyOptional.get();
            existingCompany.setName(companyDetails.getName());
            existingCompany.setEmail(companyDetails.getEmail());
            existingCompany.setPhone(companyDetails.getPhone());
            existingCompany.setCeo(companyDetails.getCeo());
            existingCompany.setCountry(companyDetails.getCountry());
            existingCompany.setProvince(companyDetails.getProvince());
            existingCompany.setCity(companyDetails.getCity());
            existingCompany.setPostalCode(companyDetails.getPostalCode());
            existingCompany.setStreet(companyDetails.getStreet());
            existingCompany.setHouseNumber(companyDetails.getHouseNumber());
            return companyRepository.save(existingCompany);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task with ID " + id + " not found");
            // You can use other HTTP status codes as needed, like HttpStatus.BAD_REQUEST
        }
    }

    public void deleteAllCompanies() {
        companyRepository.deleteAll();
    }

    public void deleteCompany(Long id) {
        companyRepository.deleteById(id);
    }
}
