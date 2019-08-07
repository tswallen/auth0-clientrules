import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  clients: any[];
  rules: any[];

  constructor(private api: ApiService) { }

  async ngOnInit() {
    await this.getClients();
    await this.getRules();
  }

  /**
   * Retrieves an array of Auth0 clients
   */
  async getClients() {
    await this.api.getClients().then(
      clients => this.clients = clients
    );
  }

  /**
   * Retrieves an array of Auth0 rules
   */
  async getRules() {
    await this.api.getRules().then(
      rules => {
        this.rules = rules;
      }
    ).finally(
      () => this.appendRules()
    );
  }

  /**
   * For each client, append an array of rules that are deemed to be exclusive
   */
  appendRules() {
    this.clients.forEach(client => {
      if (client.name === 'All Applications') { return; }
      client.rules = this.rules.filter(
        rule => rule.script.includes(`if (context.clientName === '${client.name}')`));
    });
  }

}
