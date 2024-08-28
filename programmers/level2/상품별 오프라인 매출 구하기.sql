select p.product_code, p.price * sum(o.sales_amount) as sales
from offline_sale o
left outer join product p on p.product_id = o.product_id
group by o.product_id
order by p.price * sum(o.sales_amount) desc, p.product_code